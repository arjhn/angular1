import { Component, OnInit } from '@angular/core';
import {FlagsService} from '../flags.service';

@Component({
  selector: 'app-flagfetch',
  templateUrl: './flagfetch.component.html',
  styleUrls: ['./flagfetch.component.scss']
})
export class FlagfetchComponent implements OnInit {

  FlagsObject:Object;

  searchValue:String=''

  constructor(private _flags:FlagsService) { }

  ngOnInit(): void {
    this._flags.flagFun(this.searchValue).subscribe(data =>{
      this.FlagsObject=data
      console.log(this.FlagsObject)
    })
  }

  flagSearch(value){
    this.searchValue=value
    this._flags.flagFun(this.searchValue).subscribe(data=>{
      this.FlagsObject=data
    })
  }

}
