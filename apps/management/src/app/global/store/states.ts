import {RouterReducerState} from '@ngrx/router-store';
import {KeycloakState} from "../../../../../../libs/common/src/lib/keycloak";
import {EnvironmentState} from "../../../../../../libs/common/src/lib/environment";

export interface GlobalState {
  router: RouterReducerState;
  keycloak: KeycloakState;
  environment: EnvironmentState;
}

export type AppState = GlobalState
