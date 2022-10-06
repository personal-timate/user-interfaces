import { Action, createReducer, on } from '@ngrx/store';
import { EnvironmentState } from '../environmentState';
import {getEnvironmentSuccess} from "../actions/environment.actions";

const initialState: EnvironmentState = {};

const environmentReducer = createReducer(
  initialState,
  on(getEnvironmentSuccess, (state, action) => ({
    ...state,
    environment: action.env
  }))
);

export const environmentReducerFunction = (
  state: EnvironmentState,
  action: Action
): EnvironmentState => {
  return environmentReducer(state, action);
};
