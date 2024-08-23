import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrl: './inscripciones.component.scss'
})
export class InscripcionesComponent {

  form!: FormGroup
  
  constructor(private formBuilder: FormBuilder) {

    this.form = this.formBuilder.group({
      departamento: [null, [Validators.required]],
      ciudad: [null, [Validators.required]],
      club: [null, [Validators.required]],
      entrenador: [null, [Validators.required]],
      alimentacion: [null, [Validators.required]],
      numeroAsistencia: [null, [Validators.required]],
      //------------------
      nombre: [null, [Validators.required]],
      edad: [null, [Validators.required]],
      // categoriaLista: this.formBuilder.array([]),
      peso: [null, [Validators.required]],
      eps: [null, [Validators.required]],
      sexo: [null, [Validators.required]],

      modalidad: [null, [Validators.required]],
      //-------------------
      gradoKyo: [null, [Validators.required]],
      tipoKyo: [null, [Validators.required]],
      //-------------------
      gradoPoom: [null, [Validators.required]],
      tipoPoom: [null, [Validators.required]],
    });
    
  }

}
