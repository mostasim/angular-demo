import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Users} from './users';

@Injectable({
    providedIn: 'root'
  }
)
export class Services{
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    observe: 'response' as 'body'
  };

  httpOptionsForTextResponse = {
    observe: 'response' as 'body',
    responseType: 'text' as 'json'

  };
  constructor(  private http: HttpClient) {
  }

  getUser(): Observable<HttpResponse<Users>>{
    const url = 'https://jsonplaceholder.typicode.com/users';
    return this.http.get<HttpResponse<Users>>(url, this.httpOptions);
  }

}
