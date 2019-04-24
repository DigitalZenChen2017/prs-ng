import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { JsonResponse } from '../model/json-response.class';
import { Product } from '../model/product.class';

const url: string = 'http://localhost:8080/products/';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // Returns an array of JsonResponse wrapper class, Observable types
  list(): Observable<JsonResponse> {
    return this.http.get(url) as Observable<JsonResponse>;
  }

  constructor(private http: HttpClient) { }

  get(id: string): Observable<JsonResponse> {
    console.log('productsvc.get..  id=' + id);
    return this.http.get(url + id) as Observable<JsonResponse>;
  }

  // tslint:disable-next-line: no-shadowed-variable
  create(Product: Product): Observable<any> {
    console.log('productsvc.create...');
    return this.http.post(url, Product) as Observable<any>;
  }

  // tslint:disable-next-line: no-shadowed-variable
  edit(Product: Product): Observable<any> {
    return this.http.put(url, Product) as Observable<any>;
  }

  delete(id: number): Observable<JsonResponse> {
    return this.http.delete(url + id) as Observable<JsonResponse>;
  }
}
