import { Injectable, OnDestroy } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { map, catchError, of, debounceTime, distinctUntilChanged, takeUntil, Subject, switchMap } from 'rxjs';

import { Man } from 'src/app/interface/interface'

@Injectable({
  providedIn: 'root'
})
export class PeopleService implements OnDestroy {

  private baseUrl = 'https://swapi.dev/api/';
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor() { }

  fetchData(query: string) {
    return of(query).pipe(
      debounceTime(6000),
      distinctUntilChanged(),
      switchMap(query => ajax.getJSON(this.baseUrl + 'people?search=' + query)),
      map((peoples: any) => peoples.results),
      catchError(error => {
        console.log('error: ', error);
        return of(error);
      }),
      takeUntil(this.destroy$),
    )
  }

  getPeople$() {
    return ajax.getJSON(this.baseUrl + 'people').pipe(
      map((peoples: any) => <Man[]> peoples.results),
      catchError(error => {
        console.log('error: ', error);
        return of(error);
      }),
      takeUntil(this.destroy$),
    )
  }

  public ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
