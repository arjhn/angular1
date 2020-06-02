import { HeaderComponent } from './../header/header.component';
import { WikiInfoService } from './../wiki-info.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlagsService } from '../flags.service';
import { trigger,transition,animate,style,state, query, stagger, keyframes } from '@angular/animations';

@Component({
  selector: 'app-flag-info',
  templateUrl: './flag-info.component.html',
  styleUrls: ['./flag-info.component.scss'],
  animations:[
    trigger('infoListen',[
      transition(":enter",[
        style({opacity: 0,transform:`translateX(100%)`}),
        animate('0.3s ease-in-out', style({ opacity: 1,transform:'translateX(0)' }))
      ]),
      transition(":leave",[
        animate('0.3s', style({ opacity: 0,transform:'translateX(-100%)' }))
      ]),
    ])
  ]
})

export class FlagInfoComponent implements OnInit {

  countryDetails:Object;
  finalString:String[];
  languageString:String='';
  currencyString:String='';
  borderCountry:String[]=[];
  wikiSummary:String='';
  flexTry:String='';
  flexLayout:String=''
  
  constructor(private _activatedRoute:ActivatedRoute,
                private _flagService:FlagsService,
                private _wikiInfo:WikiInfoService) { }

  ngOnInit(): void {
    
    this._activatedRoute.params.subscribe(params=>{
      this.borderCountry=[];
      this.finalString=[];
      this.wikiSummary='';
      
      this.screenCheck()

      this._flagService.flagFullSearch(params.id).subscribe(data=>{
        this.countryDetails=data
        this.languageString=this.loopDeclassify(this.countryDetails[0].languages)
        this.currencyString=this.loopDeclassify(this.countryDetails[0].currencies)
        this.borderDeclassify(this.countryDetails[0].borders)
        //console.log(this.countryDetails)
      })

      this._wikiInfo.wikiSummary(params.id).subscribe(data=>{
        this.wikiSummary=data['extract_html']
      })

    })
  }

  loopDeclassify(arr:Object[]):String{
    this.finalString=[];
    arr.forEach(elem=>{
      this.finalString.push(elem["name"])
    })
    return this.finalString.join(', ')
  }

  borderDeclassify(arr:String[]){
    this.finalString=[];
    this.borderCountry=[];
    arr.forEach(elem=>{
      this._flagService.flagCodeSearch(elem).subscribe(data=>{
        this.borderCountry.push(data['name'])
      })
    })
  }

  screenCheck(){

    if(screen.width<600){
      this.flexTry='1 1 80%';
      this.flexLayout="center"
    }
      
    else{
      this.flexTry='1 1 30%';
      this.flexLayout="end"
    }

  }

}
