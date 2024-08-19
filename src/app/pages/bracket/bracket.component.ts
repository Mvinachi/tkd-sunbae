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

  // NORMAL SOLO NOMBRES -------------------------------------------------
  // db.setData({
  //   participant: dataset.roster.map((player) => ({
  //     ...player,
  //     tournament_id: TOURNAMENT_ID,
  //   })),
  //   stage: [],
  //   group: [],
  //   round: [],
  //   match: [],
  //   match_game: [],
  // });

  // 4 JUGADORES 1 GANADOR
//   db.setData({
//     "participant": [
//         {
//             "id": 0,
//             "tournament_id": 0,
//             "name": "Team 1"
//         },
//         {
//             "id": 1,
//             "tournament_id": 0,
//             "name": "Team 2"
//         },
//         {
//             "id": 2,
//             "tournament_id": 0,
//             "name": "Team 3"
//         },
//         {
//             "id": 3,
//             "tournament_id": 0,
//             "name": "Team 4"
//         }
//     ],
//     "stage": [
//         {
//             "id": 0,
//             "tournament_id": 0,
//             "name": "holaTorneo",
//             "type": "single_elimination",
//             "number": 1,
//             "settings": {
//                 "seedOrdering": [
//                     "natural"
//                 ],
//                 "consolationFinal": false,
//                 "size": 4,
//                 "matchesChildCount": 0
//             }
//         }
//     ],
//     "group": [
//         {
//             "id": 0,
//             "stage_id": 0,
//             "number": 1
//         }
//     ],
//     "round": [
//         {
//             "id": 0,
//             "number": 1,
//             "stage_id": 0,
//             "group_id": 0
//         },
//         {
//             "id": 1,
//             "number": 2,
//             "stage_id": 0,
//             "group_id": 0
//         }
//     ],
//     "match": [
//         {
//             "id": 0,
//             "number": 1,
//             "stage_id": 0,
//             "group_id": 0,
//             "round_id": 0,
//             "child_count": 0,
//             "status": 5,
//             "opponent1": {
//                 "id": 0,
//                 "position": 1,
//                 "score": 10,
//                 "result": "win"
//             },
//             "opponent2": {
//                 "id": 1,
//                 "position": 2,
//                 "score": 5,
//                 "result": "loss"
//             }
//         },
//         {
//             "id": 1,
//             "number": 2,
//             "stage_id": 0,
//             "group_id": 0,
//             "round_id": 0,
//             "child_count": 0,
//             "status": 5,
//             "opponent1": {
//                 "id": 2,
//                 "position": 3,
//                 "score": 2,
//                 "result": "loss"
//             },
//             "opponent2": {
//                 "id": 3,
//                 "position": 4,
//                 "score": 4,
//                 "result": "win"
//             }
//         },
//         {
//             "id": 2,
//             "number": 1,
//             "stage_id": 0,
//             "group_id": 0,
//             "round_id": 1,
//             "child_count": 0,
//             "status": 5,
//             "opponent1": {
//                 "id": 0,
//                 "score": 9,
//                 "result": "loss"
//             },
//             "opponent2": {
//                 "id": 3,
//                 "score": 11,
//                 "result": "win"
//             }
//         }
//     ],
//     "match_game": []
// });

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
      },
      {
          "id": 8,
          "tournament_id": 0,
          "name": "Team 9"
      },
      {
          "id": 9,
          "tournament_id": 0,
          "name": "Team 10"
      },
      {
          "id": 10,
          "tournament_id": 0,
          "name": "Team 11"
      },
      {
          "id": 11,
          "tournament_id": 0,
          "name": "Team 12"
      },
      {
          "id": 12,
          "tournament_id": 0,
          "name": "Team 13"
      },
      {
          "id": 13,
          "tournament_id": 0,
          "name": "Team 14"
      },
      {
          "id": 14,
          "tournament_id": 0,
          "name": "Team 15"
      },
      {
          "id": 15,
          "tournament_id": 0,
          "name": "Team 16"
      }
  ],
  "stage": [
      {
          "id": 0,
          "tournament_id": 0,
          "name": "III Copa Sunbae",
          "type": "double_elimination",
          "number": 1,
          "settings": {
              "seedOrdering": [
                  "natural",
                  "natural",
                  "reverse_half_shift",
                  "reverse"
              ],
              "consolationFinal": false,
              "skipFirstRound": false,
              "grandFinal": "simple",
              "size": 16,
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
      },
      {
          "id": 2,
          "stage_id": 0,
          "number": 3
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
          "number": 4,
          "stage_id": 0,
          "group_id": 0
      },
      {
          "id": 4,
          "number": 1,
          "stage_id": 0,
          "group_id": 1
      },
      {
          "id": 5,
          "number": 2,
          "stage_id": 0,
          "group_id": 1
      },
      {
          "id": 6,
          "number": 3,
          "stage_id": 0,
          "group_id": 1
      },
      {
          "id": 7,
          "number": 4,
          "stage_id": 0,
          "group_id": 1
      },
      {
          "id": 8,
          "number": 5,
          "stage_id": 0,
          "group_id": 1
      },
      {
          "id": 9,
          "number": 6,
          "stage_id": 0,
          "group_id": 1
      },
      {
          "id": 10,
          "number": 1,
          "stage_id": 0,
          "group_id": 2
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
              "score": 3,
              "result": "loss"
          },
          "opponent2": {
              "id": 3,
              "position": 4,
              "score": 4,
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
              "score": 5,
              "result": "loss"
          },
          "opponent2": {
              "id": 5,
              "position": 6,
              "score": 6,
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
              "score": 7,
              "result": "loss"
          },
          "opponent2": {
              "id": 7,
              "position": 8,
              "score": 8,
              "result": "win"
          }
      },
      {
          "id": 4,
          "number": 5,
          "stage_id": 0,
          "group_id": 0,
          "round_id": 0,
          "child_count": 0,
          "status": 5,
          "opponent1": {
              "id": 8,
              "position": 9,
              "score": 9,
              "result": "loss"
          },
          "opponent2": {
              "id": 9,
              "position": 10,
              "score": 10,
              "result": "win"
          }
      },
      {
          "id": 5,
          "number": 6,
          "stage_id": 0,
          "group_id": 0,
          "round_id": 0,
          "child_count": 0,
          "status": 5,
          "opponent1": {
              "id": 10,
              "position": 11,
              "score": 11,
              "result": "loss"
          },
          "opponent2": {
              "id": 11,
              "position": 12,
              "score": 12,
              "result": "win"
          }
      },
      {
          "id": 6,
          "number": 7,
          "stage_id": 0,
          "group_id": 0,
          "round_id": 0,
          "child_count": 0,
          "status": 5,
          "opponent1": {
              "id": 12,
              "position": 13,
              "score": 13,
              "result": "loss"
          },
          "opponent2": {
              "id": 13,
              "position": 14,
              "score": 14,
              "result": "win"
          }
      },
      {
          "id": 7,
          "number": 8,
          "stage_id": 0,
          "group_id": 0,
          "round_id": 0,
          "child_count": 0,
          "status": 5,
          "opponent1": {
              "id": 14,
              "position": 15,
              "score": 15,
              "result": "loss"
          },
          "opponent2": {
              "id": 15,
              "position": 16,
              "score": 16,
              "result": "win"
          }
      },
      {
          "id": 8,
          "number": 1,
          "stage_id": 0,
          "group_id": 0,
          "round_id": 1,
          "child_count": 0,
          "status": 5,
          "opponent1": {
              "id": 1,
              "score": 17,
              "result": "loss"
          },
          "opponent2": {
              "id": 3,
              "score": 18,
              "result": "win"
          }
      },
      {
          "id": 9,
          "number": 2,
          "stage_id": 0,
          "group_id": 0,
          "round_id": 1,
          "child_count": 0,
          "status": 5,
          "opponent1": {
              "id": 5,
              "score": 19,
              "result": "loss"
          },
          "opponent2": {
              "id": 7,
              "score": 20,
              "result": "win"
          }
      },
      {
          "id": 10,
          "number": 3,
          "stage_id": 0,
          "group_id": 0,
          "round_id": 1,
          "child_count": 0,
          "status": 5,
          "opponent1": {
              "id": 9,
              "score": 21,
              "result": "loss"
          },
          "opponent2": {
              "id": 11,
              "score": 22,
              "result": "win"
          }
      },
      {
          "id": 11,
          "number": 4,
          "stage_id": 0,
          "group_id": 0,
          "round_id": 1,
          "child_count": 0,
          "status": 5,
          "opponent1": {
              "id": 13,
              "score": 23,
              "result": "loss"
          },
          "opponent2": {
              "id": 15,
              "score": 24,
              "result": "win"
          }
      },
      {
          "id": 12,
          "number": 1,
          "stage_id": 0,
          "group_id": 0,
          "round_id": 2,
          "child_count": 0,
          "status": 5,
          "opponent1": {
              "id": 3,
              "score": 25,
              "result": "loss"
          },
          "opponent2": {
              "id": 7,
              "score": 26,
              "result": "win"
          }
      },
      {
          "id": 13,
          "number": 2,
          "stage_id": 0,
          "group_id": 0,
          "round_id": 2,
          "child_count": 0,
          "status": 5,
          "opponent1": {
              "id": 11,
              "score": 27,
              "result": "loss"
          },
          "opponent2": {
              "id": 15,
              "score": 28,
              "result": "win"
          }
      },
      {
          "id": 14,
          "number": 1,
          "stage_id": 0,
          "group_id": 0,
          "round_id": 3,
          "child_count": 0,
          "status": 5,
          "opponent1": {
              "id": 7,
              "score": 29,
              "result": "loss"
          },
          "opponent2": {
              "id": 15,
              "score": 30,
              "result": "win"
          }
      },
      {
          "id": 15,
          "number": 1,
          "stage_id": 0,
          "group_id": 1,
          "round_id": 4,
          "child_count": 0,
          "status": 5,
          "opponent1": {
              "id": 0,
              "position": 1,
              "score": 31,
              "result": "loss"
          },
          "opponent2": {
              "id": 2,
              "position": 2,
              "score": 32,
              "result": "win"
          }
      },
      {
          "id": 16,
          "number": 2,
          "stage_id": 0,
          "group_id": 1,
          "round_id": 4,
          "child_count": 0,
          "status": 5,
          "opponent1": {
              "id": 4,
              "position": 3,
              "score": 33,
              "result": "loss"
          },
          "opponent2": {
              "id": 6,
              "position": 4,
              "score": 34,
              "result": "win"
          }
      },
      {
          "id": 17,
          "number": 3,
          "stage_id": 0,
          "group_id": 1,
          "round_id": 4,
          "child_count": 0,
          "status": 5,
          "opponent1": {
              "id": 8,
              "position": 5,
              "score": 35,
              "result": "loss"
          },
          "opponent2": {
              "id": 10,
              "position": 6,
              "score": 36,
              "result": "win"
          }
      },
      {
          "id": 18,
          "number": 4,
          "stage_id": 0,
          "group_id": 1,
          "round_id": 4,
          "child_count": 0,
          "status": 5,
          "opponent1": {
              "id": 12,
              "position": 7,
              "score": 37,
              "result": "loss"
          },
          "opponent2": {
              "id": 14,
              "position": 8,
              "score": 38,
              "result": "win"
          }
      },
      {
          "id": 19,
          "number": 1,
          "stage_id": 0,
          "group_id": 1,
          "round_id": 5,
          "child_count": 0,
          "status": 5,
          "opponent1": {
              "id": 5,
              "position": 2,
              "score": 39,
              "result": "loss"
          },
          "opponent2": {
              "id": 2,
              "score": 40,
              "result": "win"
          }
      },
      {
          "id": 20,
          "number": 2,
          "stage_id": 0,
          "group_id": 1,
          "round_id": 5,
          "child_count": 0,
          "status": 5,
          "opponent1": {
              "id": 1,
              "position": 1,
              "score": 41,
              "result": "loss"
          },
          "opponent2": {
              "id": 6,
              "score": 42,
              "result": "win"
          }
      },
      {
          "id": 21,
          "number": 3,
          "stage_id": 0,
          "group_id": 1,
          "round_id": 5,
          "child_count": 0,
          "status": 5,
          "opponent1": {
              "id": 13,
              "position": 4,
              "score": 43,
              "result": "loss"
          },
          "opponent2": {
              "id": 10,
              "score": 44,
              "result": "win"
          }
      },
      {
          "id": 22,
          "number": 4,
          "stage_id": 0,
          "group_id": 1,
          "round_id": 5,
          "child_count": 0,
          "status": 5,
          "opponent1": {
              "id": 9,
              "position": 3,
              "score": 45,
              "result": "loss"
          },
          "opponent2": {
              "id": 14,
              "score": 46,
              "result": "win"
          }
      },
      {
          "id": 23,
          "number": 1,
          "stage_id": 0,
          "group_id": 1,
          "round_id": 6,
          "child_count": 0,
          "status": 5,
          "opponent1": {
              "id": 2,
              "score": 47,
              "result": "loss"
          },
          "opponent2": {
              "id": 6,
              "score": 48,
              "result": "win"
          }
      },
      {
          "id": 24,
          "number": 2,
          "stage_id": 0,
          "group_id": 1,
          "round_id": 6,
          "child_count": 0,
          "status": 5,
          "opponent1": {
              "id": 10,
              "score": 49,
              "result": "loss"
          },
          "opponent2": {
              "id": 14,
              "score": 50,
              "result": "win"
          }
      },
      {
          "id": 25,
          "number": 1,
          "stage_id": 0,
          "group_id": 1,
          "round_id": 7,
          "child_count": 0,
          "status": 5,
          "opponent1": {
              "id": 11,
              "position": 2,
              "score": 51,
              "result": "loss"
          },
          "opponent2": {
              "id": 6,
              "score": 52,
              "result": "win"
          }
      },
      {
          "id": 26,
          "number": 2,
          "stage_id": 0,
          "group_id": 1,
          "round_id": 7,
          "child_count": 0,
          "status": 5,
          "opponent1": {
              "id": 3,
              "position": 1,
              "score": 53,
              "result": "loss"
          },
          "opponent2": {
              "id": 14,
              "score": 54,
              "result": "win"
          }
      },
      {
          "id": 27,
          "number": 1,
          "stage_id": 0,
          "group_id": 1,
          "round_id": 8,
          "child_count": 0,
          "status": 5,
          "opponent1": {
              "id": 6,
              "score": 55,
              "result": "loss"
          },
          "opponent2": {
              "id": 14,
              "score": 56,
              "result": "win"
          }
      },
      {
          "id": 28,
          "number": 1,
          "stage_id": 0,
          "group_id": 1,
          "round_id": 9,
          "child_count": 0,
          "status": 5,
          "opponent1": {
              "id": 7,
              "position": 1,
              "score": 57,
              "result": "loss"
          },
          "opponent2": {
              "id": 14,
              "score": 58,
              "result": "win"
          }
      },
      {
          "id": 29,
          "number": 1,
          "stage_id": 0,
          "group_id": 2,
          "round_id": 10,
          "child_count": 0,
          "status": 5,
          "opponent1": {
              "id": 15,
              "score": 59,
              "result": "loss"
          },
          "opponent2": {
              "id": 14,
              "position": 1,
              "score": 60,
              "result": "win"
          }
      }
  ],
  "match_game": []
})

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

}
