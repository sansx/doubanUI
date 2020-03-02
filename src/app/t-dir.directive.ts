import { Directive, Input, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[greet]'
})
export class TDirDirective {

  constructor() { }
  @Input() greet: string;
  @HostBinding() get innerText() {
      return this.greet;
  }
  @HostListener('click',['$event']) 
    onClick(event) {
      this.greet = 'Clicked!';
   }
}
