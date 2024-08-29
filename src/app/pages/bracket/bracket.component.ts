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
db.setData({
    "participant": [
      {
        "id": 52,
        "tournament_id": 0,
        "name": "dfsff"
      },
      {
        "id": 56,
        "tournament_id": 0,
        "name": "asdasdsadas"
      },
      {
        "id": 67,
        "tournament_id": 0,
        "name": "PARTICIPAPA"
      },
      {
        "id": 68,
        "tournament_id": 0,
        "name": "PARTICIPEEP"
      },
      {
        "id": 69,
        "tournament_id": 0,
        "name": "PARTICIPATTTTT"
      },
      {
        "id": 70,
        "tournament_id": 0,
        "name": "PAPAPAPA"
      },
      {
        "id": 72,
        "tournament_id": 0,
        "name": "NDNDNJSJ"
      },
      {
        "id": 73,
        "tournament_id": 0,
        "name": "PWOWOWO"
      }
    ],
    "stage": [
      {
        "id": 0,
        "tournament_id": 0,
        "name": "copa sunbae",
        "type": "single_elimination",
        "number": 1,
        "settings": {
          "seedOrdering": [
            "natural"
          ],
          "consolationFinal": true,
          "size": 8,
          "matchesChildCount": 0
        }
      }
    ],
    "group": [
      {
        "id": 0,
        "stage_id": 0,
        "number": 1
      },
      {
        "id": 1,
        "stage_id": 0,
        "number": 2
    }
    ],
    "round": [
      {
        "id": 0,
        "stage_id": 0,
        "group_id": 0,
        "number": 1
      },
      {
        "id": 1,
        "stage_id": 0,
        "group_id": 0,
        "number": 2
      },
      {
        "id": 2,
        "stage_id": 0,
        "group_id": 0,
        "number": 3
      },
      {
        "id": 3,
        "number": 1,
        "stage_id": 0,
        "group_id": 1
    }
    ],
    "match": [
      {
        "id": 505,
        "stage_id": 0,
        "group_id": 0,
        "round_id": 0,
        "number": 1,
        "child_count": 0,
        "status": 2,
        "opponent1": {
          "id": 52,
          "position": 1
        },
        "opponent2": {
          "id": 56,
          "position": 2
        }
      },
      {
        "id": 506,
        "stage_id": 0,
        "group_id": 0,
        "round_id": 0,
        "number": 2,
        "child_count": 0,
        "status": 2,
        "opponent1": {
          "id": 67,
          "position": 1
        },
        "opponent2": {
          "id": 68,
          "position": 2
        }
      },
      {
        "id": 507,
        "stage_id": 0,
        "group_id": 0,
        "round_id": 0,
        "number": 3,
        "child_count": 0,
        "status": 2,
        "opponent1": {
          "id": 69,
          "position": 1
        },
        "opponent2": {
          "id": 70,
          "position": 2
        }
      },
      {
        "id": 508,
        "stage_id": 0,
        "group_id": 0,
        "round_id": 0,
        "number": 4,
        "child_count": 0,
        "status": 2,
        "opponent1": {
          "id": 72,
          "position": 1
        },
        "opponent2": {
          "id": 73,
          "position": 2
        }
      },
      {
        "id": 509,
        "stage_id": 0,
        "group_id": 0,
        "round_id": 2,
        "number": 5,
        "child_count": 0,
        "status": 0,
        "opponent1": {
          "id": null,
          "position": 1
        },
        "opponent2": {
          "id": null,
          "position": 2
        }
      },
      {
        "id": 510,
        "stage_id": 0,
        "group_id": 0,
        "round_id": 2,
        "number": 6,
        "child_count": 0,
        "status": 0,
        "opponent1": {
          "id": null,
          "position": 1
        },
        "opponent2": {
          "id": null,
          "position": 2
        }
      },
      {
        "id": 511,
        "stage_id": 0,
        "group_id": 0,
        "round_id": 3,
        "number": 7,
        "child_count": 0,
        "status": 0,
        "opponent1": {
          "id": null,
          "position": 1
        },
        "opponent2": {
          "id": null,
          "position": 2
        }
      }
    ],
    "match_game": []
  })

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
    this.getCategoriasKyo();
    this.getCategoriasPoom();

    this.form.get('codigoc')
      ?.valueChanges.pipe(debounceTime(100))
      .subscribe((res) => {
        this.getBrackets(res)
      });

      this.form.get('codigop')
      ?.valueChanges.pipe(debounceTime(100))
      .subscribe((res) => {
        this.getBrackets(res);
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

  

}
