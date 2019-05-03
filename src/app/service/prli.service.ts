import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { JsonResponse } from '../model/json-response.class';
import { PurchaseRequestLineItem } from '../model/purchase-request-line-item.class';

const url: string = 'http://localhost:8080/purchase-request-line-items/';

@Injectable({
  providedIn: 'root'
})
export class PrliService {

  list(): Observable<JsonResponse> {
    return this.http.get(url) as Observable<JsonResponse>;
  }

  constructor(private http: HttpClient) { }

  get(id: string): Observable<JsonResponse> {
    console.log('prlisvc.get..  id=' + id);
    return this.http.get(url + id) as Observable<JsonResponse>;
  }

  add(PurchaseRequestLineItem: PurchaseRequestLineItem): Observable<JsonResponse> {
    console.log('purchaserequestsvc.create...');
    return this.http.post(url, PurchaseRequestLineItem) as Observable<JsonResponse>;
  }

  edit(PurchaseRequestLineItem: PurchaseRequestLineItem): Observable<JsonResponse> {
    return this.http.put(url, PurchaseRequestLineItem) as Observable<JsonResponse>;
  }

  delete(id: number): Observable<JsonResponse> {
    return this.http.delete(url + id) as Observable<JsonResponse>;
  }

  getAllPRLIsByPR(id: string): Observable<JsonResponse> {
    return this.http.get(url + "getAllPRLIsByPR/" + id) as Observable<JsonResponse>;
  }

}
