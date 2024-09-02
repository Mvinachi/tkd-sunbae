import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.scss'
})
export class LeaderboardComponent implements OnInit {

  DataTablas: any[] = [];
  DataTablasPoom: any[] = [];
  user:string = ''

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.user = sessionStorage.getItem('user') ? sessionStorage.getItem('user')! : '';
    this.getListado();
    this.getListadoPoom();
  }

  getListadoPoom() {
    this.http.post('http://localhost:3300/torneo/rondas', null)
        .subscribe(
          (response: any) => {
            this.DataTablasPoom = response.data
          },
          error => {
            console.error('Error al enviar los datos', error);
          }
        )
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

  getArraysOrdenados(array: any) {
    const deportistasOrdenados = array
      .map((deportista: any) => ({
        ...deportista,
        puntaje: deportista.puntaje ?? 0,
        puntaje2: deportista.puntaje2 ?? 0,
        suma_puntajes: deportista.suma_puntajes ?? 0,
        promedio_puntajes: deportista.promedio_puntajes ?? 0
      }))
      .sort((a: any, b: any) => b.promedio_puntajes - a.promedio_puntajes);
    return deportistasOrdenados;
  }


  back() {
    window.history.back()
  }

}
