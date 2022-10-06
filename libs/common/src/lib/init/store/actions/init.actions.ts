import {createAction} from "@ngrx/store";

const ACTION_PREFIX = '[INIT]'

export const initApplication = createAction(`${ACTION_PREFIX} - Initialize application`);
