import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apikey:string ="a8066eca63125eb045b527bbf7256cbb";
  appid:string ="fc8bcc30";
  constructor(private http:HttpClient) { }
  getData (){
    return this.http.get(`https://api.edamam.com/search?q=chicken&app_id=${this.appid}&app_key=${this.apikey}&from=0&to=3&calories=591-722&health=alcohol-free"`);
  }
}

