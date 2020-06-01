import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { FlagfetchComponent } from './flagfetch/flagfetch.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit{
  
  @ViewChild(FlagfetchComponent)child:FlagfetchComponent;

  refreshPage:boolean=false;

  title = 'trial-app1';

  ngOnInit(){
  }

}
