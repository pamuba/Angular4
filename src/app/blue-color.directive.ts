import { Directive,ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[blueColored]'
})
export class BlueColorDirective {

  constructor(element:ElementRef) {
    element.nativeElement.style.color = "blue";
   }

  //  @HostListener('mouseenter') doSomethingEnter(){
  //    console.log('mouse just entered');
  //  }

  //  @HostListener('mouseleave') doSomethingLeave(){
  //   console.log('mouse just left the element');
  // }

  // @HostListener('mousemove') doSomethingMove(){
  //   console.log('mouse just left the element');
  // }

  // @HostListener('click', ['$event'])
  //  elemClicked(elem){
  //    console.log('clicked', elem)
  //  }




}
