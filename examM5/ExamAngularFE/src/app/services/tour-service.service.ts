import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Tour} from "../models/Tour";

@Injectable({
  providedIn: 'root'
})
export class TourServiceService {

  constructor(private http: HttpClient) {
  }


  findAll(): Observable<Tour[]> {
    return this.http.get<Tour[]>('http://localhost:3000/tuors');
  }

  findById(id: any): Observable<Tour> {
    return this.http.get<Tour>('http://localhost:3000/tuors/' + id);
  }


  delete(id: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:3000/tuors/${id}`);
  }

  create(tour: Tour): Observable<any> {
    return this.http.post('http://localhost:3000/tuors',tour);
  }
  edit(tour: Tour, id: number): Observable<any> {
    return this.http.put(`http://localhost:3000/tuors/${id}`,tour);
  }
}
