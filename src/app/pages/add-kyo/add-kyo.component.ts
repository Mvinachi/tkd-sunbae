import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NZ_MODAL_DATA, NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-add-kyo',
  templateUrl: './add-kyo.component.html',
  styleUrl: './add-kyo.component.scss'
})
export class AddKyoComponent implements OnInit {

  nzModalData: any = inject(NZ_MODAL_DATA);
  form: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private modal: NzModalRef,
    private http: HttpClient
  ) {
    this.form = this.formBuilder.group({
      puntaje1: [null],
      puntaje2: [null],
    });

    if (this.nzModalData.id1 || this.nzModalData.id1 == 0) {
      this.form.get('puntaje1')?.enable()
    } else {
      this.form.get('puntaje1')?.disable()
    }

    if (this.nzModalData.id2 || this.nzModalData.id2 == 0) {
      this.form.get('puntaje2')?.enable()
    } else {
      this.form.get('puntaje2')?.disable()
    }
    
  }

  ngOnInit(): void {
    console.log(this.nzModalData);
    
  }

  sendForm() {
    if (this.form.valid) {

      let data = {
        id_combate: this.nzModalData.idCombate,
        id_ganador: this.form.get('puntaje1')?.value > this.form.get('puntaje2')?.value ? this.nzModalData.id1 : this.nzModalData.id2,
        score1: parseInt(this.form.get('puntaje1')?.value),
        score2: parseInt(this.form.get('puntaje2')?.value)
      }
    
      this.http.post('http://localhost:3300/registrar_ganador', data)
        .subscribe(
          (response: any) => {
            this.modal.close()
          },
          error => {
            console.error('Error al enviar los datos', error);
            this.modal.close()
          }
        )
        
    } else {
      this.formTouched(this.form)
    }
  } 

  formTouched(form: any) {
    form.markAllAsTouched();
    for (const key in form.controls) {
      form.get(key).markAsDirty();
    }
  }

}

