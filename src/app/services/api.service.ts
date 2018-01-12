import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { FlashCard } from './../interfaces/flash-card';
import { HttpErrorResponse } from '@angular/common/http/src/response';

const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {

  constructor( private http: HttpClient ) {
  }

  // API: GET /flash-cards
  public getFlashCards(): Observable<FlashCard[]> {
    return this.http
      .get<FlashCard[]>(API_URL + '/flash-cards')
      .pipe(
        tap(result => console.log('ApiService: getFlashCards called.')),
        catchError(this.handleError('ApiService: getFlashCards called.', []))
      );
  }

  // API: GET /flash-cards/:id
  public getFlashCard(flashCardId: number) {
    return this.http
      .get<FlashCard>(API_URL + '/flash-cards/' + flashCardId)
      .pipe(
        tap(result => console.log('ApiService: getFlashCard(:id) called.')),
        catchError(this.handleError('ApiService: getFlashCard(:id) called.', []))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
