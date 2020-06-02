import { Directive,Renderer2,ElementRef } from '@angular/core';

@Directive({
  selector: '[appTranslateImage]'
})
export class TranslateImageDirective {

  imgHeight:number=0;
  screenHeight:number=0;

  constructor(private render:Renderer2,
      private el:ElementRef) { }

  ngOnInit(){
    this.imgHeight=this.el.nativeElement.offsetHeight;
    this.screenHeight=0.4*screen.height
    this.render.setStyle(this.el.nativeElement,'transform',`translateY(${-(this.imgHeight-this.screenHeight)/2}px)`)
  }

}
