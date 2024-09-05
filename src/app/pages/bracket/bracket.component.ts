import { Component, Input, OnInit } from '@angular/core';
import { InMemoryDatabase } from '../../storage/memory';
import { BracketsManager } from 'brackets-manager';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd/modal';
import { HttpClient } from '@angular/common/http';
import { debounceTime } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AddKyoComponent } from '../add-kyo/add-kyo.component';

const TOURNAMENT_ID = 0;

function getNearestPowerOfTwo(input: number): number {
  return Math.pow(2, Math.ceil(Math.log2(input)));
}

async function process(base: any) {
  const db = new InMemoryDatabase();
  const manager = new BracketsManager(db);

// 16 juagdores doble torneo
db.setData(base)

  await manager.create({
    name: 'HOLA',
    tournamentId: TOURNAMENT_ID,
    type: 'single_elimination',
    seeding: base.participant.map((player: any) => player.name),
    settings: {
      seedOrdering: ['inner_outer'],
      size: getNearestPowerOfTwo(base.participant.length),
    },
  });
  
  const data = await manager.get.stageData(0);

  return {
    stages: data.stage,
    matches: data.match,
    matchGames: data.match_game,
    participants: data.participant,
  };
}

@Component({
  selector: 'app-bracket',
  templateUrl: './bracket.component.html',
  styleUrl: './bracket.component.scss'
})
export class BracketComponent implements OnInit {

    displayBoolean: boolean = false
    selectKyo: any[] = [];
    selectPoom: any[] = [];
    form: FormGroup
    user: string = '';
    estructura:any;
    participants:any;
    secondTime:boolean = false
  
  constructor(
    private formBuilder: FormBuilder,
    private modal: NzModalService,
    private http: HttpClient,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.form = this.formBuilder.group({
      codigoc: [null],
    });
  }

  ngOnInit() {

    this.activatedRoute.queryParams.subscribe(params => {
      if (params['categoria_id']) {
        let paramID = params['categoria_id']
        this.form.get('codigoc')?.setValue(paramID)

        this.getBrackets(paramID)
        this.getStructure(paramID)
      }
    });

    this.user = sessionStorage.getItem('user') ? sessionStorage.getItem('user')! : '';
    this.getCategoriasKyo();
    this.getCategoriasPoom();

    this.form.get('codigoc')
      ?.valueChanges.pipe(debounceTime(100))
      .subscribe((res) => {
        if (res != null) {
          this.getBrackets(res)
          this.getStructure(res)
        }
      });
}

getStructure(id: any) {
  this.http.get(`https://tkd.onrender.com/brackets/${id}`)
      .subscribe((data: any) => {
        this.estructura = data.data.match
        this.participants = data.data.participant
      })
}

display() {
    if (this.displayBoolean) {
        this.displayBoolean = false;
    } else {
        this.displayBoolean = true;
    }
}

getCategoriasKyo() {
    this.http.get('https://tkd.onrender.com/categoriascombate')
      .subscribe((data: any) => {
        this.selectKyo = data.data
      }, error => {
        console.error('Error al obtener los datos', error);
      });
  }

  getCategoriasPoom() {
    this.http.get('https://tkd.onrender.com/categoriaspoomsae')
      .subscribe((data: any) => {
        this.selectPoom = data.data
      }, error => {
        console.error('Error al obtener los datos', error);
      });
  }

  getBrackets(id: any) {

    if (!this.secondTime) {
      this.http.get(`https://tkd.onrender.com/brackets/${id}`)
      .subscribe((data: any) => {

        if (window.bracketsViewer) {
            window.bracketsViewer.addLocale('en', {
                common: {
                    'group-name-winner-bracket': '{{stage.name}}',
                    'group-name-loser-bracket': '{{stage.name}} - Repechage',
                },
                'origin-hint': {
                    'winner-bracket': 'WB {{round}}.{{position}}',
                    'winner-bracket-semi-final': 'WB Semi {{position}}',
                    'winner-bracket-final': 'WB Final',
                    'consolation-final': 'Semi {{position}}',
                },
            });

            this.secondTime = true
            process(data.data).then((data) => window.bracketsViewer.render(data));
        } else {
            console.error('bracketsViewer is not defined');
        }

      }, error => {
        console.error('Error al obtener los datos', error);
      });
    } else {

      this.router.navigate(['/brackets'], {
        queryParams: {
          categoria_id: id,
        }
      }).then(() => {
        window.location.reload();
      });

    }
  }

  generateBrackets() {

    const modal = this.modal.warning({
      nzTitle: 'Atencion',
      nzContent: 'Se volveran a generar nuevamente los brackets de todas las categorias y se borrara la formacion existente.',
    });

    modal.afterClose.subscribe((result)=>{
      new Promise((resolve, reject) => {
        this.http.post('https://tkd.onrender.com/brackets4all', null)
      .subscribe(
        (response: any) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
          window.location.reload()
        },
        error => {
          console.error('Error al enviar los datos', error);
          reject
        }
      );
      }).catch(() => console.log('Oops errors!'))
  })
    
  }

  addPuntaje(peleador1: any, peleador2: any, combate: any) {
    const modal = this.modal.info({
      nzTitle: `Agregar Puntaje - Combate N° ${combate}`,
      nzContent: AddKyoComponent,
      nzData: {
        id1: peleador1,
        id2: peleador2,
        idCombate: combate
      }
    })

    modal.afterClose.subscribe((result)=>{
      this.router.navigate(['/brackets'], {
        queryParams: {
          categoria_id: this.form.get('codigoc')?.value,
        }
      }).then(() => {
        window.location.reload();
      });
    })
  }
  
  // assignPositionsToParticipants() {
  //   // Clonar el array de participantes
  //   const clonedParticipants = this.participants.map((participant: any) => ({ ...participant }));
  
  //   // Crear un mapa para almacenar la posición de cada participante según su ID
  //   const positionMap = new Map<number, number>();
  
  //   // Recorrer los partidos para llenar el mapa con las posiciones
  //   this.estructura.forEach((match: any) => {
  //     if (match.opponent1 && match.opponent1.id !== null && match.opponent1.position !== undefined) {
  //       positionMap.set(match.opponent1.id, match.opponent1.position);
  //     }
  //     if (match.opponent2 && match.opponent2.id !== null && match.opponent2.position !== undefined) {
  //       positionMap.set(match.opponent2.id, match.opponent2.position);
  //     }
  //   });
  
  //   // Asignar las posiciones a los participantes clonados
  //   clonedParticipants.forEach((participant: any) => {
  //     const position = positionMap.get(participant.id);
  //     participant.position = position !== undefined ? position : null;
  //   });
  
  //   console.log(clonedParticipants);
  //   this.participants = clonedParticipants;
  // }

  findFigther(id: any) {
    return this.participants.find((item: any) => item.id == id);
  }
}
