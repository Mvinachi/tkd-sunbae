import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NZ_MODAL_DATA, NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-edit-peleador',
  templateUrl: './edit-peleador.component.html',
  styleUrl: './edit-peleador.component.scss'
})
export class EditPeleadorComponent implements OnInit {
  
  form: FormGroup
  nzModalData: any = inject(NZ_MODAL_DATA);

  demoValue: number = 1
  formatterKg = (value: number): string => `${value} Kg`;
  parserKg = (value: string): string => value.replace(' Kg', '');
  
  constructor(
    private formBuilder: FormBuilder,
    private modal: NzModalRef,
    private http: HttpClient
  ) {
    this.form = this.formBuilder.group({
      activo: [null, [Validators.required]],
      apellido: [null, [Validators.required]], //
      ciudad: [null, [Validators.required]], //
      club: [null, [Validators.required]], //
      departamento: [null, [Validators.required]], //
      entrenador: [null, [Validators.required]],
      eps: [null, [Validators.required]], //
      hospedaje: [null, [Validators.required]], //
      nombre: [null, [Validators.required]], //
      numeroAsistencia: [null, [Validators.required]], //
      peso: [null, [Validators.required]], //
      sexo: [null, [Validators.required]] //
    });
  }

  ngOnInit(): void {

    this.form.setValue({
      activo: this.nzModalData.peleador.activo,
      apellido: this.nzModalData.peleador.apellido, 
      ciudad: this.nzModalData.peleador.ciudad, 
      club: this.nzModalData.peleador.club, 
      departamento: this.nzModalData.peleador.departamento, 
      entrenador: this.nzModalData.peleador.entrenador,
      eps: this.nzModalData.peleador.eps, 
      hospedaje: this.nzModalData.peleador.hospedaje, 
      nombre: this.nzModalData.peleador.nombre, 
      numeroAsistencia: this.nzModalData.peleador.numeroasistencia, 
      peso: this.nzModalData.peleador.peso, 
      sexo: this.nzModalData.peleador.sexo 
    })

  }

  sendForm() {

    if (this.form.valid) {

      let data = {
        "id_deportista": this.nzModalData.peleador.id_deportista,
        "nombre": this.form.get('nombre')?.value,
        "apellido": this.form.get('apellido')?.value,
        "sexo": this.form.get('sexo')?.value,
        "peso": this.form.get('peso')?.value,
        "club": this.form.get('club')?.value,
        "activo": this.form.get('activo')?.value,
        "departamento": this.form.get('departamento')?.value,
        "ciudad": this.form.get('ciudad')?.value,
        "entrenador": this.form.get('entrenador')?.value,
        "numeroasistencia": this.form.get('numeroAsistencia')?.value,
        "eps": this.form.get('eps')?.value,
        "hospedaje": this.form.get('hospedaje')?.value,
    }

      this.http.put('https://tkd.onrender.com/torneo/editar', data)
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
