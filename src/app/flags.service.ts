import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FlagsService {

  constructor( private http:HttpClient) { }

  flagsAll(){
    return this.http.get('https://restcountries.eu/rest/v2/all')
  }

  flagsSearch(searchValue){
    return this.http.get('https://restcountries.eu/rest/v2/name/'+searchValue)
  }

  flagFullSearch(FullName){
    return this.http.get("https://restcountries.eu/rest/v2/name/"+FullName+"?fullText=true")
  }

  flagCodeSearch(countryCode){
    return this.http.get("https://restcountries.eu/rest/v2/alpha/"+countryCode)
  }

}
