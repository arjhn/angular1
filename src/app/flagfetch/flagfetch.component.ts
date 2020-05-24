import { Component, OnInit } from '@angular/core';
import {FlagsService} from '../flags.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flagfetch',
  templateUrl: './flagfetch.component.html',
  styleUrls: ['./flagfetch.component.scss']
})

export class FlagfetchComponent implements OnInit {

  FlagsObject:Object;  

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
    this._flags.flagsSearch(this.searchValue).subscribe(data=>{
      this.FlagsObject=data
    })
  }

  redirectFlag(Name:String){
    this._router.navigate(["flag/"+Name])
  }

}
