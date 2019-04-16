import {
  Directive,
  HostListener,
  HostBinding,
  ElementRef
} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open')
  hasClassOpen = false;

  constructor(private elem: ElementRef) {}

  @HostListener('click')
  onEleClick() {
    this.hasClassOpen = !this.hasClassOpen;
  }

  // @HostListener('document:click', ['$event'])
  // onEleFocusout(event: MouseEvent) {
  //   const te = event.target as HTMLElement;

  //   if (te && this.elem.nativeElement.contains(te)) {
  //     this.hasClassOpen = false;
  //   }
  // }
}
