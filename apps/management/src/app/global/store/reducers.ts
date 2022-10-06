import {routerReducer} from '@ngrx/router-store';
import {ActionReducerMap} from '@ngrx/store';
import {GlobalState} from './states';
import {keycloakReducerFunction} from "../../../../../../libs/common/src/lib/keycloak";
import {environmentReducerFunction} from "../../../../../../libs/common/src/lib/environment";

export const globalReducers: ActionReducerMap<GlobalState> = {
  // @ts-ignore
  keycloak: keycloakReducerFunction,
  router: routerReducer,
  // @ts-ignore
  environment: environmentReducerFunction,
};
