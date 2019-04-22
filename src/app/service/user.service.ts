import { Injectable } from '@angular/core';
import { User } from '../model/user.class';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { JsonResponse } from '../model/json-response.class';

const url: string = 'http://localhost:8080/users/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // Returns an array of JsonResponse wrapper class, Observable types
  list(): Observable<JsonResponse> {
    return this.http.get(url) as Observable<JsonResponse>;
  }

  constructor(private http: HttpClient) { }
}
