import {EnvironmentEffects} from "../../../../../../libs/common/src/lib/environment";
import {KeycloakEffects} from "../../../../../../libs/common/src/lib/keycloak";


export const globalEffects: any[] = [
  KeycloakEffects,
  EnvironmentEffects
];
