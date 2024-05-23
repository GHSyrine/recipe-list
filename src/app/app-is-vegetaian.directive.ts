import { Directive, ElementRef, Renderer2, OnChanges, Input } from '@angular/core';

@Directive({
  selector: '[appAppIsVegetaian]',
  standalone: true
})
export class AppIsVegetaianDirective implements OnChanges{
  @Input() appAppIsVegetaian = true;

  constructor(private el : ElementRef, private renderer : Renderer2) { }


  ngOnChanges(){
  if(this.appAppIsVegetaian){
    this.renderer.setStyle(this.el.nativeElement,'color', 'green')
  }
  else{
    this.renderer.setStyle(this.el.nativeElement,'color', 'red')
  }
}


}
