import {createFeatureSelector, createSelector} from '@ngrx/store';
import {KeycloakState} from "../keycloak.state";

const selectKeycloak = createFeatureSelector<KeycloakState>('keycloak');

export const getKeycloakUser = createSelector(selectKeycloak, (state) => state.user);

export const selectKeycloakUserDisplayName = createSelector(getKeycloakUser, (state) => {
  const fnln = `${state.firstName||''} ${state.lastName||''}`.trim()
  if (fnln == ' ') {
    return state.username
  } else return fnln
});

export const selectKeycloakUser = createSelector(getKeycloakUser, (state) => {
  return state
});
