import { Fact } from '../interfaces/fact.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const APIBASE = 'https://cat-fact.herokuapp.com/';
const FACTS = 'facts/random';
const FACTS_WITH_ERROR = 'facts/error';

@Injectable({
  providedIn: 'root'
})

export class GridService {

  constructor(
    private http: HttpClient,
  ) { }

  getFacts(): Observable<Fact[]> {
    return this.http.get<Fact[]>(APIBASE + FACTS);
  }

  getFactsWithError(): Observable<Fact[]> {
    return this.http.get<Fact[]>(APIBASE + FACTS_WITH_ERROR);
  }
}
