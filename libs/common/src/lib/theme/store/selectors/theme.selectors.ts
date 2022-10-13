import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ThemeState} from "../theme.state";

const selectThemeState = createFeatureSelector<ThemeState>('theme');

export const selectTheme = createSelector(selectThemeState, (state) => state.theme);
