import { Directive,ElementRef,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appImageheight]'
})
export class ImageheightDirective {

  customHeight:number=150;
  customWidth:number=200;
  scaleRatio:number=0;

  constructor(private el:ElementRef,
      private renderer:Renderer2) { 
    
  }

  ngOnInit(){
    
    if(this.el.nativeElement.offsetHeight>150){
          
      this.renderer.removeStyle(this.el.nativeElement,'width');
      this.renderer.setStyle(this.el.nativeElement,'height','150px')

    }
    console.clear()
    console.log(this.el.nativeElement.offsetHeight+'-'+this.el.nativeElement.offsetWidth)

    this.scaleRatio=(150-this.el.nativeElement.offsetHeight)/2
    //this.renderer.setStyle(this.el.nativeElement,'transform',`translateY(${this.scaleRatio}px)`)

  }

}
