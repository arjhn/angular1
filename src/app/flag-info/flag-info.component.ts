import { WikiInfoService } from './../wiki-info.service';
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
  borderCountry:String[]=[];
  wikiSummary:String='';

  constructor(private _activatedRoute:ActivatedRoute,
                private _flagService:FlagsService,
                private _wikiInfo:WikiInfoService) { }

  ngOnInit(): void {
    
    this._activatedRoute.params.subscribe(params=>{
      this.borderCountry=[];
      this.finalString=[];
      this.wikiSummary='';
      
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

}
