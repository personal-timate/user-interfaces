import {createAction, props} from "@ngrx/store";

const ACTION_PREFIX = '[ENVIRONMENT]'

export const getEnvironment = createAction(`${ACTION_PREFIX} - Get environment`);

export const getEnvironmentSuccess = createAction(`${ACTION_PREFIX} - Get environment success`, props<{ env: any }>());
