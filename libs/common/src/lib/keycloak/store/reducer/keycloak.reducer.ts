import {Action, createReducer, on} from '@ngrx/store';
import {KeycloakProfile} from 'keycloak-js';
import * as keycloakActions from '../actions/keycloak.actions';
import {KeycloakState} from "../keycloak.state";

const initState: () => KeycloakState = () => ({
  user: {},
});

const keycloakReducer = createReducer(
  initState(),
  on(keycloakActions.actionGetKeycloakUserSuccess, (state, action) =>
    setKeycloakUser(state, action.user),
  ),
);

export function keycloakReducerFunction(state: KeycloakState, action: Action): KeycloakState {
  return keycloakReducer(state, action);
}

function setKeycloakUser(state: KeycloakState, user: KeycloakProfile): KeycloakState {
  return {
    ...state,
    user
  };
}
