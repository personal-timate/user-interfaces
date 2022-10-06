import {KeycloakProfile} from 'keycloak-js';
import {createAction, props} from "@ngrx/store";

const ACTION_PREFIX = '[KEYCLOAK]'

export const actionLogout = createAction(`${ACTION_PREFIX} - logout`);
export const actionGetKeycloakUser = createAction(`${ACTION_PREFIX} - Load Keycloak user`);
export const actionGetKeycloakUserSuccess = createAction(`${ACTION_PREFIX} - Load Keycloak user success`, props<{ user: KeycloakProfile }>());
export const actionRefreshAccessToken = createAction(`${ACTION_PREFIX} - Refresh access token`);
