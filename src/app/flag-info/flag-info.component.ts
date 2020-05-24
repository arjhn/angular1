import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlagsService } from '../flags.service';

@Component({
  selector: 'app-flag-info',
  templateUrl: './flag-info.component.html',
  styleUrls: ['./flag-info.component.scss']
})
export class FlagInfoComponent implements OnInit {

  countryDetails:Object;
  finalString:String[];
  languageString:String='';
  currencyString:String='';
  borderString:String='';

  constructor(private _activatedRoute:ActivatedRoute,
                private _flagService:FlagsService) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params=>{
      this._flagService.flagFullSearch(params.id).subscribe(data=>{
        this.countryDetails=data
        this.languageString=this.loopDeclassify(this.countryDetails[0].languages)
        this.currencyString=this.loopDeclassify(this.countryDetails[0].currencies)
        this.borderDeclassify(this.countryDetails[0].borders)
        //console.log(this.countryDetails)
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
    this.borderString='';
    arr.forEach(elem=>{
      this._flagService.flagCodeSearch(elem).subscribe(data=>{
        this.borderString=this.borderString+""+(data['name'].indexOf('(')!=-1?data['name'].substring(0,data['name'].indexOf('(')):data['name'])+", "
      })
    })
    arr.length<1?this.borderString="None":this.borderString
  }

}
