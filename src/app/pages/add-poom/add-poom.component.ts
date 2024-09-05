import { HttpClient } from '@angular/common/http';
import { Component, inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NZ_MODAL_DATA, NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-add-poom',
  templateUrl: './add-poom.component.html',
  styleUrl: './add-poom.component.scss'
})
export class AddPoomComponent implements OnInit {

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
  }

  ngOnInit(): void {

    this.form.setValue({
      puntaje1: this.nzModalData.puntaje1,
      puntaje2: this.nzModalData.puntaje2,
    })
    
  }

  sendForm() {

    if (this.form.valid) {

      let data = {
        id_deportista: this.nzModalData.id,
        id_categoriap: this.nzModalData.categoriap,
        puntaje: parseFloat(this.form.get('puntaje1')?.value),
        puntaje2: parseFloat(this.form.get('puntaje2')?.value)
    }

      this.http.post('https://tkd.onrender.com/torneo/puntaje', data)
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
