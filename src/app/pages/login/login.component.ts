import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  form!: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private modal: NzModalService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      nombre: [null, [Validators.required]],
      pass: [null, [Validators.required]],
    });
  }

  sendForm() {
    if (this.form.get('nombre')?.value == 'admin' && this.form.get('pass')?.value == 'admin') {
      sessionStorage.setItem('user', 'admin')
      sessionStorage.setItem('pass', 'admin')

      const modal = this.modal.success({
        nzTitle: 'Exitoso',
        nzContent: 'Ha ingresado exitosamente a la plataforma'
      });
      
      modal.afterClose.subscribe(result => {
        this.router.navigate(['./'])
      })
    } else {
      this.modal.error({
        nzTitle: 'Error',
        nzContent: 'Datos incorrectos'
      });
    }
  }
}
