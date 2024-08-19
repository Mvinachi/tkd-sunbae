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
      codigo: [null, [Validators.required]],
    });
    
  }

}
