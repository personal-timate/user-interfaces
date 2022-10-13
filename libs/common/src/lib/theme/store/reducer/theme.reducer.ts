import {Action, createReducer, on} from '@ngrx/store';
import {Theme, ThemeState} from "../theme.state";
import {actionSwitchTheme} from "../actions/theme.actions";

const initState: () => ThemeState = () => ({
  theme: Theme.LIGHT,
});

const themeReducer = createReducer(
  initState(),
  on(actionSwitchTheme, (state, action) =>
    switchTheme(state),
  ),
);

export function themeReducerFunction(state: ThemeState, action: Action): ThemeState {
  return themeReducer(state, action);
}

function switchTheme(state: ThemeState): ThemeState {
  return {
    ...state,
    theme: (state.theme == Theme.DARK) ? Theme.LIGHT : Theme.DARK
  };
}
