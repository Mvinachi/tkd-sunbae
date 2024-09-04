import { Directive, HostListener, ElementRef, Optional, Input } from '@angular/core';
import { NgControl, FormControl } from '@angular/forms';

@Directive({
  selector: '[OnlyNumbers]'
})
export class OnlyNumbersDirective {

  constructor(@Optional() private formControl: NgControl) { }

  @HostListener('input', ['$event']) onInput(event: any) {
    if (this.formControl) {
      this.formControl.control!.patchValue(this.formControl.control!.value.replaceAll(/[^0-9 ]/gi, ''));
    }
  }

}
