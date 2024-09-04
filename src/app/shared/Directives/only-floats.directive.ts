import { Directive, HostListener, Optional } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appOnlyFloats]'
})
export class OnlyFloatsDirective {

  constructor(@Optional() private formControl: NgControl) {}

  @HostListener('input', ['$event']) onInput(event: any) {
    if (this.formControl) {
      let value = this.formControl.control!.value;

      // Reemplazar todo lo que no sea número o punto
      value = value.replace(/[^0-9.]/g, '');

      // Manejar múltiples puntos decimales
      const decimalCount = (value.match(/\./g) || []).length;
      if (decimalCount > 1) {
        value = value.substring(0, value.lastIndexOf('.'));
      }

      // Si empieza con punto, agregar 0 al inicio
      if (value.startsWith('.')) {
        value = '0' + value;
      }

      // // Validar si el número está dentro del rango permitido
      // const numericValue = parseFloat(value);
      // if (numericValue > 10) {
      //   value = '10';
      // } else if (numericValue < 0.1 && value.length > 0) {
      //   value = '0.1';
      // }

      // Actualizar el valor del control de formulario
      this.formControl.control!.patchValue(value);
    }
  }
}
