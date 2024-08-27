import { Component, Input, OnInit } from '@angular/core';
import { InMemoryDatabase } from '../../storage/memory';
import { BracketsManager } from 'brackets-manager';
import { dataset8, dataset16, dataset4, dataset32 } from '../../storage/datasets';

const TOURNAMENT_ID = 0;

function getNearestPowerOfTwo(input: number): number {
  return Math.pow(2, Math.ceil(Math.log2(input)));
}

async function process(dataset: Dataset) {
  const db = new InMemoryDatabase();
  const manager = new BracketsManager(db);

// 16 juagdores doble torneo
db.setData({
        "participant": [
            {
                "id": 0,
                "tournament_id": 0,
                "name": "Team 1"
            },
            {
                "id": 1,
                "tournament_id": 0,
                "name": "Team 2"
            },
            {
                "id": 2,
                "tournament_id": 0,
                "name": "Team 3"
            },
            {
                "id": 3,
                "tournament_id": 0,
                "name": "Team 4"
            },
            {
                "id": 4,
                "tournament_id": 0,
                "name": "Team 5"
            },
            {
                "id": 5,
                "tournament_id": 0,
                "name": "Team 6"
            },
            {
                "id": 6,
                "tournament_id": 0,
                "name": "Team 7"
            },
            {
                "id": 7,
                "tournament_id": 0,
                "name": "Team 8"
            }
        ],
        "stage": [
            {
                "id": 0,
                "tournament_id": 0,
                "name": "III Copa Sunbae",
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
                "number": 1,
                "stage_id": 0,
                "group_id": 0
            },
            {
                "id": 1,
                "number": 2,
                "stage_id": 0,
                "group_id": 0
            },
            {
                "id": 2,
                "number": 3,
                "stage_id": 0,
                "group_id": 0
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
                "id": 0,
                "number": 1,
                "stage_id": 0,
                "group_id": 0,
                "round_id": 0,
                "child_count": 0,
                "status": 5,
                "opponent1": {
                    "id": 0,
                    "position": 1,
                    "score": 1,
                    "result": "loss"
                },
                "opponent2": {
                    "id": 1,
                    "position": 2,
                    "score": 2,
                    "result": "win"
                }
            },
            {
                "id": 1,
                "number": 2,
                "stage_id": 0,
                "group_id": 0,
                "round_id": 0,
                "child_count": 0,
                "status": 5,
                "opponent1": {
                    "id": 2,
                    "position": 3,
                    "score": 1,
                    "result": "loss"
                },
                "opponent2": {
                    "id": 3,
                    "position": 4,
                    "score": 2,
                    "result": "win"
                }
            },
            {
                "id": 2,
                "number": 3,
                "stage_id": 0,
                "group_id": 0,
                "round_id": 0,
                "child_count": 0,
                "status": 5,
                "opponent1": {
                    "id": 4,
                    "position": 5,
                    "score": 1,
                    "result": "loss"
                },
                "opponent2": {
                    "id": 5,
                    "position": 6,
                    "score": 2,
                    "result": "win"
                }
            },
            {
                "id": 3,
                "number": 4,
                "stage_id": 0,
                "group_id": 0,
                "round_id": 0,
                "child_count": 0,
                "status": 5,
                "opponent1": {
                    "id": 6,
                    "position": 7,
                    "score": 1,
                    "result": "loss"
                },
                "opponent2": {
                    "id": 7,
                    "position": 8,
                    "score": 2,
                    "result": "win"
                }
            },
            {
                "id": 4,
                "number": 1,
                "stage_id": 0,
                "group_id": 0,
                "round_id": 1,
                "child_count": 0,
                "status": 5,
                "opponent1": {
                    "id": 1,
                    "score": 1,
                    "result": "loss"
                },
                "opponent2": {
                    "id": 3,
                    "score": 2,
                    "result": "win"
                }
            },
            {
                "id": 5,
                "number": 2,
                "stage_id": 0,
                "group_id": 0,
                "round_id": 1,
                "child_count": 0,
                "status": 5,
                "opponent1": {
                    "id": 5,
                    "score": 1,
                    "result": "loss"
                },
                "opponent2": {
                    "id": 7,
                    "score": 2,
                    "result": "win"
                }
            },
            {
                "id": 6,
                "number": 1,
                "stage_id": 0,
                "group_id": 0,
                "round_id": 2,
                "child_count": 0,
                "status": 5,
                "opponent1": {
                    "id": 3,
                    "score": 1,
                    "result": "loss"
                },
                "opponent2": {
                    "id": 7,
                    "score": 2,
                    "result": "win"
                }
            },
            {
                "id": 7,
                "number": 1,
                "stage_id": 0,
                "group_id": 1,
                "round_id": 3,
                "child_count": 0,
                "status": 2,
                "opponent1": {
                    "id": 1,
                    "position": 1
                },
                "opponent2": {
                    "id": 5,
                    "position": 2
                }
            }
        ],
        "match_game": []
    }
)

  await manager.create({
    name: dataset.title,
    tournamentId: TOURNAMENT_ID,
    type: dataset.type,
    seeding: dataset.roster.map((player) => player.name),
    settings: {
      seedOrdering: ['inner_outer'],
      size: getNearestPowerOfTwo(dataset.roster.length),
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

  ngOnInit() {
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

        process(dataset4).then((data) => window.bracketsViewer.render(data));
    } else {
        console.error('bracketsViewer is not defined');
    }
}

display() {
    if (this.displayBoolean) {
        this.displayBoolean = false;
    } else {
        this.displayBoolean = true;
    }
}

}
