import "./css/bootstrap.min.css";
import "./css/style.css";

import { createStore, applyMiddleware } from "redux";
// import reduser from "./redux/reducer";
import { plus, minus, changeTheme, asyncIncrement } from "./redux/actions";
import thunk from "redux-thunk";
import logger from "redux-logger";
//helpers
const { log } = console;
// - refs
const counter = document.querySelector("#counter");
const minusBtn = document.querySelector("#minus-btn");
const plusBtn = document.querySelector("#plus-btn");
const themeBtn = document.querySelector("#theme-btn");
const asyncBtn = document.querySelector("#async-btn");
import { rootReducer } from "./redux/reducer";
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

const render = (conterValue, themeValue, disableBtns) => {
  // track changes
  counter.textContent = conterValue;
  document.body.dataset.bsTheme = themeValue;
  [asyncBtn, minusBtn, plusBtn, themeBtn].forEach(
    (btn) => (btn.disabled = disableBtns)
  );
};
store.subscribe(() => {
  let { counter, theme, disableBtns } = store.getState();
  render(counter, theme.value);
  log("----------------");
  log("counter: ", counter);
  log("theme: ", theme);
  log("disableBtns: ", disableBtns);
  render(counter, theme.value, disableBtns);
});
minusBtn.onclick = () => {
  store.dispatch(minus());
};
plusBtn.onclick = () => {
  store.dispatch(plus());
};
themeBtn.onclick = () => {
  let newTheme = !document.body.dataset.bsTheme ? "dark" : "";
  store.dispatch(changeTheme(newTheme));
};

asyncBtn.onclick = () => {
  store.dispatch(asyncIncrement());
};
store.dispatch({ type: "INIT-APP" });
