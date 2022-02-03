import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { markTodoDoneFromDetails } from './todo.actions';

@Injectable({ providedIn: 'root' })
export class TodoEffects {
  navigateBackToListAfterDone$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(markTodoDoneFromDetails),
        tap(() => {
          this.router.navigate([ '/todos' ]);
        })
      ),
    { dispatch: false }
  );

  constructor(
    private readonly actions$: Actions,
    private readonly router: Router,
  ) {
  }
}