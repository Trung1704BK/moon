import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from './testapi.model';

@Injectable({
  providedIn: 'root'
})
export class TestapiService {
  url: string = 'http://localhost:3000/api/china';
  url1: string = 'http://localhost:3000/api/vietnam';
  url2: string = 'http://localhost:3000/api/japan';
  constructor(private http: HttpClient) { }
// china
  getList(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }

  viewdetailID(id: Product[]): Observable<Product[]> {
    return this.http.get<Product[]>(this.url + '/' + id)
  }
// vietnam
  getListvietnam(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url1);
  }

  viewdetailIDvietnam(id: Product[]): Observable<Product[]> {
    return this.http.get<Product[]>(this.url1 + '/' + id)
  }

  // japan
  getListjapan(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url2);
  }

  viewdetailIDjapan(id: Product[]): Observable<Product[]> {
    return this.http.get<Product[]>(this.url2 + '/' + id)
  }
}
