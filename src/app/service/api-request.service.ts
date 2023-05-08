import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch"
import {ProductRequest} from "../model/ProductRequest";


@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {
  private host: string = "http://localhost:8080/api/products/";

  constructor(private http: HttpClient) {
  }

  getAllProducts(): Observable<any[]> {
    return this.http.get<ProductRequest[]>(this.host);
  }

  getProduct(id: number): Observable<any> {
    const url = `${this.host}/${id}`;
    return this.http.get<ProductRequest>(url);
  }

  createProduct(product: ProductRequest): Observable<any> {
    return this.http.post<ProductRequest>(this.host, product);
  }

  updateProduct(product: ProductRequest): Observable<any> {
    const url = `${this.host}/${product.id}`;
    return this.http.put<ProductRequest>(url, product);
  }

  deleteProduct(id: number): Observable<any> {
    const url = `${this.host}/${id}`;
    return this.http.delete<ProductRequest>(url);
  }
}
