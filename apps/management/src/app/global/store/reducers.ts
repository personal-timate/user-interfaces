import {routerReducer} from '@ngrx/router-store';
import {ActionReducerMap} from '@ngrx/store';
import {GlobalState} from './states';
import {keycloakReducerFunction} from "../../../../../../libs/common/src/lib/keycloak";
import {environmentReducerFunction} from "../../../../../../libs/common/src/lib/environment";
import {themeReducerFunction} from "../../../../../../libs/common/src/lib/theme/store/reducer/theme.reducer";

export const globalReducers: ActionReducerMap<GlobalState> = {
  // @ts-ignore
  keycloak: keycloakReducerFunction,
  router: routerReducer,
  // @ts-ignore
  environment: environmentReducerFunction,
  // @ts-ignore
  theme: themeReducerFunction,
};
