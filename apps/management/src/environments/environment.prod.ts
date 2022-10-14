import {ManagementEnvironment} from "./environment-interface";
import {KeycloakService} from "keycloak-angular";

export const environment: ManagementEnvironment = {
  production: true,
  authUrl: 'REPLACE_AUTH_URL',
  coreServiceUrl: 'REPLACE_CORE_SERVICE_URL',
  realm: 'timate',
  clientId: 'timate:ui',
  services: {
    keycloak: KeycloakService,
  },
};
