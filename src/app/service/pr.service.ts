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
  submitNew(PurchaseRequest: PurchaseRequest): Observable<JsonResponse> {
    console.log('purchaserequestsvc.submitNew...');
    return this.http.post(url + 'submit-new', PurchaseRequest) as Observable<JsonResponse>;
  }

  submitForReview(PurchaseRequest: PurchaseRequest): Observable<JsonResponse> {
    console.log('purchaserequestsvc.submitForReview...')
    return this.http.post(url + "submit-review", PurchaseRequest) as Observable<JsonResponse>;
  }

  listReview(id: number): Observable<JsonResponse> {
    let urlStr: string = url + "list-review/" + id;
    console.log("listReview url:  " + urlStr);
    console.log("pr listReview(): " + PurchaseRequest);
    return this.http.get(url + "list-review/" + id) as Observable<JsonResponse>;
  }

  approveRequest(PurchaseRequest: PurchaseRequest): Observable<JsonResponse> {
    console.log('purchaserequestsvc.approveRequest...')
    return this.http.post(url + "approve", PurchaseRequest) as Observable<JsonResponse>;
  }

  rejectRequest(PurchaseRequest: PurchaseRequest, reasonForRejection: String): Observable<JsonResponse> {
    console.log('purchaserequestsvc.rejectRequest...')
    reasonForRejection = PurchaseRequest.reasonForRejection;
    return this.http.post(url + "reject", PurchaseRequest) as Observable<JsonResponse>;
  }

  // tslint:disable-next-line: no-shadowed-variable
  edit(PurchaseRequest: PurchaseRequest): Observable<JsonResponse> {
    return this.http.put(url, PurchaseRequest) as Observable<JsonResponse>;
  }

  delete(id: number): Observable<JsonResponse> {
    return this.http.delete(url + id) as Observable<JsonResponse>;
  }
}
