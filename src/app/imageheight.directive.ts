import { Directive, ElementRef, Renderer2, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appImageheight]'
})
export class ImageheightDirective{

  customHeight:number=150;
  customWidth:number=200;
  scaleRatio:number=0;

  @Output() onValueUpdate= new EventEmitter();

  constructor(private el:ElementRef,
      private renderer:Renderer2) { 
    
  }

  ngOnInit(){
    
    if(this.el.nativeElement.offsetHeight>150){          
      this.renderer.removeStyle(this.el.nativeElement,'width');
      this.renderer.setStyle(this.el.nativeElement,'height','150px')
    }
    if((150-this.el.nativeElement.offsetHeight)>0)
      this.scaleRatio=(150-this.el.nativeElement.offsetHeight)/2;
    else
      this.scaleRatio=0
    this.renderer.setStyle(this.el.nativeElement,'transform',`translateY(${this.scaleRatio}px)`);
    this.onValueUpdate.emit(this.scaleRatio)
  }

}
