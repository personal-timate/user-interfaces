import {KeycloakProfile} from 'keycloak-js';
import {createAction, props} from "@ngrx/store";
import {Theme} from "../theme.state";

const ACTION_PREFIX = '[THEME]'

export const actionSwitchTheme = createAction(`${ACTION_PREFIX} - switch`);
