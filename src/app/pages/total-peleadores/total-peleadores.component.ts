import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd/modal';
import { EditPeleadorComponent } from '../edit-peleador/edit-peleador.component';

@Component({
  selector: 'app-total-peleadores',
  templateUrl: './total-peleadores.component.html',
  styleUrl: './total-peleadores.component.scss'
})

export class TotalPeleadoresComponent implements OnInit {

  form: FormGroup
  user:string = ''
  pass:string = ''
  
  constructor(
    private formBuilder: FormBuilder,
    private modal: NzModalService,
    private http: HttpClient
  ) {

    this.user = sessionStorage.getItem('user') ? sessionStorage.getItem('user')! : '';
    console.log(this.user);
    

    this.form = this.formBuilder.group({
      buscar: [null],
    });
    
  }

  filteredData: any[] = [];
  listOfData: any[] = []

  ngOnInit() {
      this.getPeleadores();
  }

  getPeleadores() {
    this.http.get('http://localhost:3300/torneo')
      .subscribe((data: any) => {
        this.listOfData = data.data;
        this.filteredData = [...this.listOfData];
      }, error => {
        console.error('Error al obtener los datos', error);
      });
  }

  searchData(): void {
    let searchValue = this.form.get('buscar')?.value
    let fields: any[] = [
      'nombre',
      'apellido',
      'club',
      'sexo',
      'peso',
      'modalidad',
      'activo'
    ]

    if (searchValue) {
        this.filteredData = this.listOfData.filter(data => 
            fields.some(field => 
                data[field].toString().toLowerCase().includes(searchValue.toLowerCase())
            )
        );
    } else {
        this.filteredData = [...this.listOfData]; // Restablece todos los datos si no hay búsqueda
    }
}

deleteForm(id: number) {

      let data = {
        id_deportista: id
      }

      this.http.post('http://localhost:3300/torneo/eliminar', data)
      .subscribe(
        (response: any) => {
          const modal = this.modal.success({
            nzTitle: 'Exitoso',
            nzContent: response.message
          });

          modal.afterClose.subscribe(result => {
            this.getPeleadores();
          })
        },
        error => {
          console.error('Error al enviar los datos', error);
        }
      )
  }

  calculateAge(birthDateString: string): number {
    const birthDate = new Date(birthDateString);
    const today = new Date();
  
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
  
    // Verifica si el mes o día actual es antes del mes o día de nacimiento
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
  
    return age;
  }

  editPeleador(peleador: any) {
    const modal = this.modal.info({
      nzTitle: 'Editar peleador',
      nzContent: EditPeleadorComponent,
      nzWidth: '40.6rem',
      nzData: {
        peleador: peleador,
      }
    })

    modal.afterClose.subscribe(result => {
      this.getPeleadores();
    })
  }

  
}
