import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { JsonResponse } from '../model/json-response.class';
import { PurchaseRequest } from '../model/purchase-request.class';

const url: string = 'http://localhost:8080/purchase-requests/';

@Injectable({
  providedIn: 'root'
})
export class PrService {

  // Returns an array of JsonResponse wrapper class, Observable types
  list(): Observable<JsonResponse> {
    return this.http.get(url) as Observable<JsonResponse>;
  }

  constructor(private http: HttpClient) { }

  get(id: string): Observable<JsonResponse> {
    console.log('purchaserequestsvc.get..  id=' + id);
    return this.http.get(url + id) as Observable<JsonResponse>;
  }

  // tslint:disable-next-line: no-shadowed-variable
  create(PurchaseRequest: PurchaseRequest): Observable<any> {
    console.log('purchaserequestsvc.create...');
    return this.http.post(url, PurchaseRequest) as Observable<any>;
  }

  // tslint:disable-next-line: no-shadowed-variable
  edit(PurchaseRequest: PurchaseRequest): Observable<any> {
    return this.http.put(url, PurchaseRequest) as Observable<any>;
  }

  delete(id: number): Observable<JsonResponse> {
    return this.http.delete(url + id) as Observable<JsonResponse>;
  }
}
