import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.scss'
})
export class LeaderboardComponent {

  DataTablas: any[] = []

  constructor(
    private http: HttpClient
  ) {
    this.getListado()
  }

  getListado() {

    this.http.post('http://localhost:3300/winners', null)
        .subscribe(
          (response: any) => {
            this.DataTablas = response.data
          },
          error => {
            console.error('Error al enviar los datos', error);
          }
        )

  }


  back() {
    window.history.back()
  }

}
