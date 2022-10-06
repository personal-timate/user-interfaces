import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map} from 'rxjs';
import {environment} from "../../../../../../../apps/management/src/environments/environment";
import {getEnvironmentSuccess} from "../actions/environment.actions";
import {initApplication} from "../../../init/store/actions/init.actions";

@Injectable()
export class EnvironmentEffects {
  constructor(
    private readonly actions$: Actions,
  ) {}

  setEnvironment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(initApplication),
      map(() => getEnvironmentSuccess({ env: environment}))
    )
  );
}
