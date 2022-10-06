import {KeycloakProfile} from 'keycloak-js';

export interface KeycloakState {
  user: KeycloakProfile;
}
