import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FlagsService {

  constructor( private http:HttpClient) { }

  flagFun(searchValue){
    if(searchValue=='')
    return this.http.get('https://restcountries.eu/rest/v2/all')
    else
    return this.http.get('https://restcountries.eu/rest/v2/name/'+searchValue)
  }

}
