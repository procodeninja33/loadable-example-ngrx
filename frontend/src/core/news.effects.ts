import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, delay, map, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { LoadNewsError, LoadNewsSuccess, NewsActionsTypes } from './news.actions';

// function mockApiResponse(): Observable<{ todaysNews: string[] }> {
//   return of({ todaysNews: ['news1', 'news2', 'news3', 'news4'] }).pipe(delay(1000));
// }

@Injectable()
export class NewsEffects {

  constructor(private actions$: Actions, private http: HttpClient) {
  }

  @Effect()
  loadNews = this.actions$.pipe(
    ofType(NewsActionsTypes.Load),
    switchMap(action => {
      // return mockApiResponse();
      return this.http.get('http://localhost:42000/get_latest_news').pipe(
        map((response: any) => new LoadNewsSuccess({ entities: response.todaysNews })),
        catchError(error => of(new LoadNewsError(error)))
      );
    }),
  );
}
