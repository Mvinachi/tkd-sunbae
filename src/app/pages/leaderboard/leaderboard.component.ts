import { HttpClient } from '@angular/common/http';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { AddPoomComponent } from '../add-poom/add-poom.component';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.scss'
})
export class LeaderboardComponent implements OnInit {

  DataTablas: any[] = [];
  DataTablasPoom: any[] = [];
  superU:any = ''

  constructor(
    private http: HttpClient,
    private modal: NzModalService
  ) {}

  ngOnInit(): void {
    this.getListado();
    this.getListadoPoom();

    this.superU = sessionStorage.getItem('pass') ? sessionStorage.getItem('pass') : '';
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

  addPuntaje(puntaje1: any, puntaje2: any, id: any, cateoriap: any) {
    const modal = this.modal.info({
      nzTitle: 'Agregar Puntaje',
      nzContent: AddPoomComponent,
      nzData: {
        puntaje1: puntaje1,
        puntaje2: puntaje2,
        categoriap: cateoriap,
        id: id
      }
    })

    modal.afterClose.subscribe(result => {
      this.getListadoPoom();
    })
  }

  back() {
    window.history.back()
  }

  generatePoom() {

    const modal = this.modal.warning({
      nzTitle: 'Atencion',
      nzContent: 'Se volveran a generar nuevamente las tabla de clasificaciones de todas las categorias Poomsae y se borrara la formacion existente.',
    });

    modal.afterClose.subscribe((result)=>{
      new Promise((resolve, reject) => {
        this.http.post('http://localhost:3300/torneo/poomsae', null)
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

}
