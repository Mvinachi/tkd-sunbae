import { HttpClient } from '@angular/common/http';
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

  selectKyo: any[] = [];
  selectPoom: any[] = [];

  get kyoLista() {
    return this.form.get('kyoLista') as FormArray;
  }
  get poomLista() {
    return this.form.get('poomLista') as FormArray;
  }
  
  constructor(
    private formBuilder: FormBuilder,
    private modal: NzModalService,
    private http: HttpClient
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
      apellido: [null, [Validators.required]],
      edad: [null, [Validators.required]],
      peso: [null, [Validators.required]],
      eps: [null, [Validators.required]],
      sexo: [null, [Validators.required]],
      modalidad: [null, [Validators.required]],
      token: [null, [Validators.required]],
      //-------------------
      kyoLista: this.formBuilder.array([]),
      //-------------------
      poomLista: this.formBuilder.array([]),
    });
    
  }

  ngOnInit(): void {
    this.getCategoriasKyo();
    this.getCategoriasPoom();

    this.form.get('modalidad')
      ?.valueChanges.pipe(debounceTime(100))
      .subscribe((res) => {
        if (res == 'K') {
          this.poomLista.clear()
          this.agregarFormKyo()
        } else if(res == 'P') {
          this.kyoLista.clear()
          this.agregarFormPoom()
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

  combineCategorias(array1?: any[]) {
    let categorias = array1?.map(item => item.categoria);

    return categorias;
  }

  sendForm() {
    if (this.form.valid) {

      let newData = {
        nombre: this.form.get('nombre')?.value,
        apellido: this.form.get('apellido')?.value,
        sexo: this.form.get('sexo')?.value,
        peso: this.form.get('peso')?.value,
        club: this.form.get('club')?.value,
        departamento: this.form.get('departamento')?.value,
        ciudad: this.form.get('ciudad')?.value,
        entrenador: this.form.get('entrenador')?.value,
        numeroasistencia: parseInt(this.form.get('numeroAsistencia')?.value),
        nacimiento: this.form.get('edad')?.value,
        eps: this.form.get('eps')?.value,
        hospedaje: this.form.get('alimentacion')?.value,
        id_categorias: this.form.get('modalidad')?.value == 'K' ? this.combineCategorias(this.form.get('kyoLista')?.value) : this.combineCategorias(this.form.get('poomLista')?.value)
    }

      this.http.post(this.form.get('modalidad')?.value == 'K' ? 'http://localhost:3300/inscribirdeportistacombate' : 'http://localhost:3300/inscribirdeportistapoomsae', newData)
      .subscribe(
        (response: any) => {
          this.modal.success({
            nzTitle: 'Exitoso',
            nzContent: response
          });
          // Maneja la respuesta como desees, por ejemplo, actualizando la lista de categorías
        },
        error => {
          console.error('Error al enviar los datos', error);
        }
      );
    } else{
      this.formTouched(this.form)

      console.log(this.form.get('kyoLista')?.value);
      console.log(this.form.get('poomLista')?.value);
      
      
      this.modal.error({
        nzTitle: 'Error',
        nzContent: 'El formulario de inscripcion no pudo ser enviado, verifique que todos los campos esten correctos'
      });
    }
  }

  getCategoriasKyo() {
    this.http.get('http://localhost:3300/categoriascombate')
      .subscribe((data: any) => {
        this.selectKyo = data.data
      }, error => {
        console.error('Error al obtener los datos', error);
      });
  }

  getCategoriasPoom() {
    this.http.get('http://localhost:3300/categoriaspoomsae')
      .subscribe((data: any) => {
        this.selectPoom = data.data
      }, error => {
        console.error('Error al obtener los datos', error);
      });
  }


}
