import { HeaderComponent } from './../header/header.component';
import { Component, OnInit } from '@angular/core';
import {FlagsService} from '../flags.service';
import { Router } from '@angular/router';
import { trigger,transition,animate,style,state, query, stagger, keyframes } from '@angular/animations';

let screenString =screen.width>600?'100%,0':'0,-50%';
let mobileTransl=screen.width>600?'translateX(-100%)':'translateY(100%)';

@Component({
  selector: 'app-flagfetch',
  templateUrl: './flagfetch.component.html',
  styleUrls: ['./flagfetch.component.scss'],
  animations:[
    
    trigger('listAnimation', [
      transition('* => *', [ 
    
        query(':leave', [
          style({opacity:1}),
          stagger(0, [
            animate('0.2s', style({ opacity: 0 }))
          ])
        ], { optional: true }),
    
        query(':enter', [
          style({ opacity: 0,transform:`translate(${screenString})` }),
          stagger(30, [
            animate('0.3s', style({ opacity: 1,transform:'translate(0,0)' }))
          ])
        ], { optional: true })
      ])
    ]),

    trigger('introAnim',[
      transition('*=>*',[
        query(':leave', [
          style({opacity:1}),
          stagger(0, [
            animate('0.2s', style({ opacity: 0 }))
          ])
        ], { optional: true }),
    
        query(':enter', [
          style({ opacity: 0,transform:`translate(${screenString})` }),
          stagger(30, [
            animate('0.3s', style({ opacity: 1,transform:'translate(0,0)' }))
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
  txValue:String[]=[];
  imagePresent:boolean[];
  menuPresent:boolean=false;

  flexTry:String='';
  flexLayout:String='';

  searchValue:String=''

  introText:String[]=[
    "Hey,",
    "The WebApp displays a few details about the countries you search for in the SearchBar above",
    "Feel free to checkout.",
    "Thanks a ton !!"
  ];

  introStyle:Object={
    top:'25vh',
    left: '20vw',
    width: '50vw'
  }

  constructor(private _flags:FlagsService,
              private _router:Router) { }

  ngOnInit(): void {
    this.txValue=[]
    this.screenChecker()

  }

  flagSearch(value:String){
    
    this.searchValue=value
    this.flagSrc=[]
    this.flagName=[]
    this.txValue=[]
    
    if(value !='')
      this._flags.flagsSearch(this.searchValue).subscribe(data=>{
        this.flagSrc=this.arrayParser(data,[],'flag')
        this.flagName=this.arrayParser(data,[],'name')
      })
    
    else
      this._flags.flagsAll().subscribe(data =>{
        this.flagSrc=this.arrayParser(data,[],'flag')
        this.flagName=this.arrayParser(data,[],'name')
      })
  
  }

  redirectFlag(Name:String){
    
    this.presentFlag=true
    this._router.navigate(["flag/"+Name])
  }

  arrayParser(data:Object,temp:String[],tag:String):String[]{
    
    for(let i=0;i<Object.keys(data).length;i++)
      temp.push(data[i][tag])
    return temp
  }

  translateValue(tX:String){

    this.txValue.push(tX)
    this.imagePresent.push(true)
  }

  screenChecker(){
    if(screen.width<600){
      this.flexTry='1 1 60%';
      this.menuPresent=false;
      this.flexLayout="center";
      this.introStyle={
        top:'20vh',
        left: '5vw',
        width: '90vw'
      }
    }
      
    else{
      this.flexTry='1 1 40%';
      this.menuPresent=true
      this.flexLayout="end"
    }

  }
}
