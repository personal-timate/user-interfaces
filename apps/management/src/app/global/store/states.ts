import {RouterReducerState} from '@ngrx/router-store';
import {KeycloakState} from "../../../../../../libs/common/src/lib/keycloak";
import {EnvironmentState} from "../../../../../../libs/common/src/lib/environment";
import {ThemeState} from "../../../../../../libs/common/src/lib/theme/store/theme.state";

export interface GlobalState {
  router: RouterReducerState;
  keycloak: KeycloakState;
  environment: EnvironmentState;
  theme: ThemeState
}

export type AppState = GlobalState
