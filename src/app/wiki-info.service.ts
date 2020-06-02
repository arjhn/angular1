import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WikiInfoService {

  constructor(private http:HttpClient) { }

  wikiSummary(name:String){
    return this.http.get("https://en.wikipedia.org/api/rest_v1/page/summary/"+name)
  }
}
