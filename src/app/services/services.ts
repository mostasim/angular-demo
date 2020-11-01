import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Users} from './User';

@Injectable({
    providedIn: 'root'
  }
)
export class Services{
  constructor(  private http: HttpClient) {
  }

  getUser(): Observable<HttpResponse<Users>>{
    const url = 'https://jsonplaceholder.typicode.com/users';
    return this.http.get<HttpResponse<Users>>(url);
  }

}
