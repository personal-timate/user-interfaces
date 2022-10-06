import {createFeatureSelector, createSelector} from '@ngrx/store';
import {KeycloakState} from "../keycloak.state";

const selectKeycloak = createFeatureSelector<KeycloakState>('keycloak');

export const getKeycloakUser = createSelector(selectKeycloak, (state) => state.user);

export const getKeycloakUserDispalyName = createSelector(getKeycloakUser, (state) => {
  const fnln = `${state.firstName||''} ${state.lastName||''}`.trim()
  if (fnln == ' ') {
    return state.username
  } else return fnln
});
