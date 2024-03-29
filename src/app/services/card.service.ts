import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CardModel } from '../model/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private http: HttpClient) { 
  }

  getCards(): Observable<CardModel[]>{
    return this.http.get<CardModel[]>('http://localhost:9000/api/v1/card'+'/list').pipe(map(data => data));
  }

  saveCards(request: any): Observable<any>{
    return this.http.post<CardModel[]>('http://localhost:9000/api/v1/card'+'/save', request).pipe(map(data => data));
  }

  updateCards(request: any): Observable<any>{
    return this.http.post<CardModel[]>('http://localhost:9000/api/v1/card'+'/update', request).pipe(map(data => data));
  }

  deleteCards(id: number): Observable<any>{
    return this.http.get<CardModel[]>('http://localhost:9000/api/v1/card'+'/delete/'+id).pipe(map(data => data));
  }
}
