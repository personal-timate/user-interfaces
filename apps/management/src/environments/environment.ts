// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {ManagementEnvironment} from "./environment-interface";
import {KeycloakService} from "keycloak-angular";

export const environment: ManagementEnvironment = {
  production: false,
  authUrl: 'http://docker-machine:3005/',
  coreServiceUrl: 'http://localhost:8095',
  realm: 'timate',
  clientId: 'timate:ui',
  services: {
    keycloak: KeycloakService,
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
