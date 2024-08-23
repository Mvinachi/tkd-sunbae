import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd/modal';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrl: './inscripciones.component.scss'
})
export class InscripcionesComponent implements OnInit {

  form!: FormGroup

  demoValue: number = 1
  formatterKg = (value: number): string => `${value} Kg`;
  parserKg = (value: string): string => value.replace(' Kg', '');

  get kyoLista() {
    return this.form.get('kyoLista') as FormArray;
  }

  get poomLista() {
    return this.form.get('poomLista') as FormArray;
  }
  
  constructor(
    private formBuilder: FormBuilder,
    private modal: NzModalService
  ) {

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
      peso: [null, [Validators.required]],
      eps: [null, [Validators.required]],
      sexo: [null, [Validators.required]],
      modalidad: [null, [Validators.required]],
      //-------------------
      kyoLista: this.formBuilder.array([]),
      gradoKyo: [null, [Validators.required]],
      tipoKyo: [null, [Validators.required]],
      //-------------------
      poomLista: this.formBuilder.array([]),
      gradoPoom: [null, [Validators.required]],
      tipoPoom: [null, [Validators.required]],
    });
    
  }

  ngOnInit(): void {
    this.agregarFormKyo()
    this.agregarFormPoom()

    this.form.get('modalidad')
      ?.valueChanges.pipe(debounceTime(100))
      .subscribe((res) => {
        if (res == 'K') {
          this.poomLista.clear()
          this.agregarFormPoom()
        } else if(res == 'P') {
          this.kyoLista.clear()
          this.agregarFormKyo()
        }
      });
  }

  formTouched(form: any) {
    form.markAllAsTouched();
    for (const key in form.controls) {
      form.get(key).markAsDirty();
    }
  }

  agregarFormKyo() {
    this.kyoLista.push(this.formBuilder.group({
      categoria: [null, Validators.required],
    }));
  }

  agregarFormPoom() {
    this.poomLista.push(this.formBuilder.group({
      categoria: [null, Validators.required],
    }));
  }

  eliminarFormKyo(index: number) {
    if (this.kyoLista.length == 1) {
      this.kyoLista.clear();
      this.agregarFormKyo();
    } else {
      this.kyoLista.removeAt(index);
    }
  }

  eliminarFormPoom(index: number) {
    if (this.poomLista.length == 1) {
      this.poomLista.clear();
      this.agregarFormPoom();
    } else {
      this.poomLista.removeAt(index);
    }
  }

  sendForm() {
    if (this.form.valid) {
      
    } else{
      this.formTouched(this.form)
      // this.form.get('departamento')?.markAsDirty
      this.modal.error({
        nzTitle: 'Error',
        nzContent: 'El formulario de inscripcion no pudo ser enviado, verifique que todos los campos esten correctos'
      });
    }
  }
}
