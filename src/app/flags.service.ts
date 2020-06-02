import { error } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FlagsService {

  constructor( private http:HttpClient) { }

  flagsAll(){
    return this.http.get('https://restcountries.eu/rest/v2/all')
      .pipe(
        retry(6),
        catchError(this.errorHandler)
      );
  }

  flagsSearch(searchValue){
    return this.http.get('https://restcountries.eu/rest/v2/name/'+searchValue)
    .pipe(
      retry(6),
      catchError(this.errorHandler)
    );
  }

  flagFullSearch(FullName){
    return this.http.get("https://restcountries.eu/rest/v2/name/"+FullName+"?fullText=true")
    .pipe(
      retry(6),
      catchError(this.errorHandler)
    );
  }

  flagCodeSearch(countryCode){
    return this.http.get("https://restcountries.eu/rest/v2/alpha/"+countryCode)
    .pipe(
      retry(6),
      catchError(this.errorHandler)
    );
  }

  errorHandler(error:HttpErrorResponse){
    console.log('lol')
    return throwError(error)
  }
}
