import { Component, OnInit } from '@angular/core';
import {FlagsService} from '../flags.service';
import { Router } from '@angular/router';
import { trigger,transition,animate,style,state, query, stagger, keyframes } from '@angular/animations';

@Component({
  selector: 'app-flagfetch',
  templateUrl: './flagfetch.component.html',
  styleUrls: ['./flagfetch.component.scss'],
  animations:[
    trigger('listAnimation',[
      transition('*=>true',[
        query('li', style({ opacity: 0 })),
        query('li', animate(300, style({ opacity: 1 })))
    ])
  ])
    /**trigger('listAnimation',[
      transition(':enter',[
        style({opacity:0}),
        animate('0.5s',style({opacity:1}))
      ]),
      transition(':leave',[
        animate('0.2s',style({opacity:0}))
      ])      
    ])**/
  ]
})

export class FlagfetchComponent implements OnInit {

  FlagsObject:Object; 
  presentFlag:boolean=false; 

  searchValue:String=''

  constructor(private _flags:FlagsService,
              private _router:Router) { }

  ngOnInit(): void {
    this._flags.flagsAll().subscribe(data =>{
      this.FlagsObject=data
      //console.log(this.FlagsObject)
    })
  }

  flagSearch(value:String){
    this.searchValue=value
    this.presentFlag=false
    this._flags.flagsSearch(this.searchValue).subscribe(data=>{
      this.FlagsObject=data
      this.presentFlag=true
    })
  }

  redirectFlag(Name:String){
    this._router.navigate(["flag/"+Name])
  }

}
