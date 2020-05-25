import { Component, OnInit } from '@angular/core';
import {FlagsService} from '../flags.service';
import { Router } from '@angular/router';
import { trigger,transition,animate,style,state, query, stagger, keyframes } from '@angular/animations';

@Component({
  selector: 'app-flagfetch',
  templateUrl: './flagfetch.component.html',
  styleUrls: ['./flagfetch.component.scss'],
  animations:[
    trigger('listAnimation', [
      transition('* => *', [ // each time the binding value changes
        query(':leave', [
          stagger(100, [
            animate('0.5s', style({ opacity: 0 }))
          ])
        ], { optional: true }),
        query(':enter', [
          style({ opacity: 0 }),
          stagger(100, [
            animate('0.5s', style({ opacity: 1 }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})

export class FlagfetchComponent implements OnInit {

  FlagsObject:Object; 
  presentFlag:boolean=false;
  flagSrc:String[];
  flagName:String[];


  searchValue:String=''

  constructor(private _flags:FlagsService,
              private _router:Router) { }

  ngOnInit(): void {
    this._flags.flagsAll().subscribe(data =>{
      this.flagSrc=this.arrayParser(data,[],'flag')
      this.flagName=this.arrayParser(data,[],'name')
    })
  }

  flagSearch(value:String){
    this.searchValue=value
    this._flags.flagsSearch(this.searchValue).subscribe(data=>{
      this.flagSrc=this.arrayParser(data,[],'flag')
      this.flagName=this.arrayParser(data,[],'name')
    })
  }

  redirectFlag(Name:String){
    this._router.navigate(["flag/"+Name])
  }

  arrayParser(data:Object,temp:String[],tag:String):String[]{
    for(let i=0;i<Object.keys(data).length;i++)
      temp.push(data[i][tag])
    return temp
  }

}
