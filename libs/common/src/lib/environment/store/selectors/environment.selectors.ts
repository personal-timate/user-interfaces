import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EnvironmentState } from '../environmentState';

const settingsState = createFeatureSelector<EnvironmentState>('environment');

export const selectAppEnvironment = createSelector(
  settingsState,
  (state: EnvironmentState) => state.environment
);
