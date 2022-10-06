import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {KeycloakService} from 'keycloak-angular';
import {map} from 'rxjs/operators';
import * as keycloakActions from '../actions/keycloak.actions';
import {initApplication} from "../../../init/store/actions/init.actions";

@Injectable()
export class KeycloakEffects {
  constructor(private actions$: Actions, private keycloak: KeycloakService) {}

  // noinspection JSUnusedGlobalSymbols
  getUser = createEffect(() =>
    this.actions$.pipe(
      ofType(keycloakActions.actionGetKeycloakUser, initApplication),
      map(() => {
        const keycloakInstance = this.keycloak.getKeycloakInstance();
        const kcUser = {
          ...keycloakInstance.profile,
          id: keycloakInstance.subject,
        };
        return keycloakActions.actionGetKeycloakUserSuccess({user: kcUser});
      })
    )
  );

  // noinspection JSUnusedGlobalSymbols
  logout = createEffect(
    () =>
      this.actions$.pipe(
        ofType(keycloakActions.actionLogout),
        map(() => this.keycloak.logout())
      ),
    { dispatch: false }
  );

  // noinspection JSUnusedGlobalSymbols
  refreshToken = createEffect(
    () =>
      this.actions$.pipe(
        ofType(keycloakActions.actionRefreshAccessToken),
        map(() => this.keycloak.getKeycloakInstance().updateToken(-1))
      ),
    { dispatch: false }
  );
}
