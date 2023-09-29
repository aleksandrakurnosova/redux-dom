import {
  PLUS,
  MINUS,
  CHANGE_THEME,
  ENABLE_BUTTONS,
  DISABLE_BUTTONS,
} from "./types";

import { combineReducers } from "redux";

const { log } = console;

const counter = (state = 0, action) => {
  //   log('----------');
  //   log(action);

  if (action.type == PLUS) return state + 1;
  if (action.type == MINUS) return state - 1;
  return state;
};
const initThemeState = {
  name: "theme",
  value: "",
};

const theme = (state = initThemeState, action) => {
  if (action.type == CHANGE_THEME) return { ...state, value: action.payload };
  return state;
};
const disableBtns = (state = false, action) => {
  switch (action.type) {
    case DISABLE_BUTTONS:
      return true;
    case ENABLE_BUTTONS:
      return false;
    default:
      return state;
  }
};
export const rootReducer = combineReducers({
  counter,
  theme,
  disableBtns,
});
