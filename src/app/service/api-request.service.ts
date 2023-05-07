import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch"


@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {
  private host: string = "http://localhost:8080/api/products/";

  constructor(private http: HttpClient) {
  }

  getAllProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.host);
  }

  getProduct(id: number): Observable<any> {
    const url = `${this.host}/${id}`;
    return this.http.get<any>(url);
  }

  createProduct(product: any): Observable<any> {
    return this.http.post<any>(this.host, product);
  }

  updateProduct(product: any): Observable<any> {
    const url = `${this.host}/${product.id}`;
    return this.http.put<any>(url, product);
  }

  deleteProduct(id: number): Observable<any> {
    const url = `${this.host}/${id}`;
    return this.http.delete<any>(url);
  }
}
