import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { TodoState } from "../reducers";
import { Store } from "@ngrx/store";
import * as listActions from "../actions/list.actions";
import { TodoEntity } from "../reducers/list.reducer";
import { switchMap, map, catchError, tap } from "rxjs/operators";
import { environment } from "../../../../environments/environment";
import { of } from "rxjs";

@Injectable()
export class ListEffects {
  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<TodoState>
  ) {}

  loadList$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(listActions.loadItems),
        switchMap(() =>
          this.http.get<TodoEntity[]>(environment.todosUrl).pipe(
            map(r => listActions.loadItemsSucceeded({ payload: r })),
            catchError(err =>
              of(listActions.loadItemsFailed({ message: err.message }))
            )
          )
        )
      ),
    {
      dispatch: true
    }
  );

  addItem$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(listActions.addListItem),
        switchMap(a =>
          this.http
            .post<TodoEntity>(environment.todosUrl, {
              description: a.payload.description
            })
            .pipe(
              map(r =>
                listActions.addListItemSucceeded({
                  oldId: a.payload.id,
                  payload: r
                })
              )
            )
        )
      ),
    {
      dispatch: true
    }
  );

  removeItem$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(listActions.removeListItem),
        tap(() => console.log("removing")),
        switchMap(a =>
          this.http
            .request("delete", environment.todosUrl, {
              body: a.payload
            })
            .pipe(
              map(r =>
                listActions.removeListItemSucceeded({
                  payload: a.payload
                })
              )
            )
        )
      ),
    {
      dispatch: true
    }
  );
}
