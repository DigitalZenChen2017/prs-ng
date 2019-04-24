import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { JsonResponse } from '../model/json-response.class';
import { Vendor } from '../model/vendor.class';

const url: string = 'http://localhost:8080/vendors/';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  // Returns a JsonResponse wrapper class, Observable types
  list(): Observable<JsonResponse> {
    return this.http.get(url) as Observable<JsonResponse>;
  }

  constructor(private http: HttpClient) { }

  get(id: string): Observable<JsonResponse> {
    console.log('vendorsvc.get..  id=' + id);
    return this.http.get(url + id) as Observable<JsonResponse>;
  }

  // tslint:disable-next-line: no-shadowed-variable
  create(Vendor: Vendor): Observable<any> {
    console.log('vendorsvc.create...');
    return this.http.post(url, Vendor) as Observable<any>;
  }

  // tslint:disable-next-line: no-shadowed-variable
  edit(Vendor: Vendor): Observable<any> {
    return this.http.put(url, Vendor) as Observable<any>;
  }

  delete(id: number): Observable<JsonResponse> {
    return this.http.delete(url + id) as Observable<JsonResponse>;
  }
}
