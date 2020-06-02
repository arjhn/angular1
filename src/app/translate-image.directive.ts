import { Directive,Renderer2,ElementRef } from '@angular/core';

@Directive({
  selector: '[appTranslateImage]'
})
export class TranslateImageDirective {

  imgHeight:number=0;
  screenHeight:number=0;

  constructor(private render:Renderer2,
      private el:ElementRef) { 
        //console.log("after"+this.screenHeight+" - "+this.imgHeight)
      }

  ngOnInit(){
    this.imgHeight=this.el.nativeElement.offsetHeight;
    this.screenHeight=0.4*screen.height
    if(this.imgHeight>this.screenHeight){
      this.render.setStyle(this.el.nativeElement,'transform',`translateY(${-(this.imgHeight-this.screenHeight)/2}px)`)
    }
    else{
      console.log(this.screenHeight+" - "+this.imgHeight)
      this.render.removeStyle(this.el.nativeElement,'width')
      this.render.setStyle(this.el.nativeElement,'height','100%')
//      this.render.setStyle(this.el.nativeElement,'transform',`translateY(${-(this.imgHeight-this.screenHeight)/2}px)`)
    }

  }

}
