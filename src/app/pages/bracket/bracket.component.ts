import { Component, Input, OnInit } from '@angular/core';
import { InMemoryDatabase } from '../../storage/memory';
import { BracketsManager } from 'brackets-manager';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd/modal';
import { HttpClient } from '@angular/common/http';
import { debounceTime } from 'rxjs';

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
    estructura:any
  
  constructor(
    private formBuilder: FormBuilder,
    private modal: NzModalService,
    private http: HttpClient
  ) {
    this.form = this.formBuilder.group({
      codigoc: [null],
      codigop: [null],
    });
  }

  ngOnInit() {

    this.user = sessionStorage.getItem('user') ? sessionStorage.getItem('user')! : '';
    this.getCategoriasKyo();
    this.getCategoriasPoom();

    this.form.get('codigoc')
      ?.valueChanges.pipe(debounceTime(100))
      .subscribe((res) => {
        if (res != null) {
          this.getBrackets(res)
        }
      });

      this.form.get('codigop')
      ?.valueChanges.pipe(debounceTime(100))
      .subscribe((res) => {
        if (res != null) {
          this.getBrackets(res)
        }
      });

    
}

display() {
    if (this.displayBoolean) {
        this.displayBoolean = false;
    } else {
        this.displayBoolean = true;
    }
}

getCategoriasKyo() {
    this.http.get('http://localhost:3300/categoriascombate')
      .subscribe((data: any) => {
        this.selectKyo = data.data
      }, error => {
        console.error('Error al obtener los datos', error);
      });
  }

  getCategoriasPoom() {
    this.http.get('http://localhost:3300/categoriaspoomsae')
      .subscribe((data: any) => {
        this.selectPoom = data.data
      }, error => {
        console.error('Error al obtener los datos', error);
      });
  }

  getBrackets(id: any) {
    this.http.get(`http://localhost:3300/brackets/${id}`)
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
            
    
            process(data.data).then((data) => window.bracketsViewer.render(data));
        } else {
            console.error('bracketsViewer is not defined');
        }

      }, error => {
        console.error('Error al obtener los datos', error);
      });
  }

  generateBrackets() {

    const modal = this.modal.warning({
      nzTitle: 'Atencion',
      nzContent: 'Se volveran a generar nuevamente los brackets de todas las categorias y se borrara la formacion existente.',
      nzOnOk: () =>
        new Promise((resolve, reject) => {
          this.http.post('http://localhost:3300/brackets4all', null)
        .subscribe(
          (response: any) => {
            setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
          },
          error => {
            console.error('Error al enviar los datos', error);
            reject
          }
        );
        }).catch(() => console.log('Oops errors!'))
    });
    
  }
  

}
