import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open')
  hasClassOpen = false;

  @HostListener('click')
  onEleClick() {
    this.hasClassOpen = !this.hasClassOpen;
  }
}
