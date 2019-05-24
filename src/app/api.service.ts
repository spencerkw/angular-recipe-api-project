import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apikey:string ="a8066eca63125eb045b527bbf7256cbb";
  appid:string ="fc8bcc30";

  constructor(private http: HttpClient) { }

  getData(searchText: string) {
    return this.http.get(`https://api.edamam.com/search?q=${searchText}&app_id=${this.appid}&app_key=${this.apikey}`);
  }
}

