import {
  PLUS,
  MINUS,
  CHANGE_THEME,
  DISABLE_BUTTONS,
  ENABLE_BUTTONS,
} from "./types";

const { log } = console;

const plus = () => {
  log("----------------");
  console.log("PLUS!");
  return { type: PLUS };
};
const minus = () => {
  log("----------------");
  console.log("MINUS!");
  return { type: MINUS };
};
const changeTheme = (newTheme) => {
  log("----------------");
  console.log("CHANGE_THEME!");
  return { type: CHANGE_THEME, payload: newTheme };
};
const disableButtons = () => {
  log("----------------");
  console.log("DISABLE_BUTTONS!");
  return { type: DISABLE_BUTTONS };
};
const enableButtons = () => {
  log("----------------");
  console.log("ENABLE_BUTTONS!");
  return { type: ENABLE_BUTTONS };
};
const asyncIncrement = () => {
  return function (dispatch) {
    dispatch(disableButtons());
    setTimeout(() => {
      dispatch(plus());
      dispatch(enableButtons());
    }, 2000);
  };
};
export { plus, minus, changeTheme, asyncIncrement };
