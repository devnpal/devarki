import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  baseURL: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private _httpClient: HttpClient) { }

  getAllData(): Observable<any> {
   return this._httpClient.get<any>(this.baseURL);
  }
}
