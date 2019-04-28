import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { JsonResponse } from '../model/json-response.class';
import { User } from '../model/user.class';

const url = 'http://localhost:8080/users/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // Returns an array of JsonResponse wrapper class, Observable types
  login(user: User): Observable<JsonResponse> {
    return this.http.post(url + "authenticate", user) as Observable<JsonResponse>;
  }

  list(): Observable<JsonResponse> {
    return this.http.get(url) as Observable<JsonResponse>;
  }

  constructor(private http: HttpClient) { }

  get(id: string): Observable<JsonResponse> {
    console.log('usersvc.get..  id=' + id);
    return this.http.get(url + id) as Observable<JsonResponse>;
  }

  // tslint:disable-next-line: no-shadowed-variable
  create(User: User): Observable<any> {
    console.log('usersvc.create...');
    return this.http.post(url, User) as Observable<any>;
  }

  // tslint:disable-next-line: no-shadowed-variable
  edit(User: User): Observable<any> {
    return this.http.put(url, User) as Observable<any>;
  }

  delete(id: number): Observable<JsonResponse> {
    return this.http.delete(url + id) as Observable<JsonResponse>;
  }

}
