//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/bootstrap.min.css';
import './css/style.css';

//helpers
const { log } = console;
// - refs
const counter = document.querySelector('#counter');
const minusBtn = document.querySelector('#minus-btn');
const plusBtn = document.querySelector('#plus-btn');
const themeBtn = document.querySelector('#theme-btn');

// - data
let state = {
  value: 0,
};

// - functions
const render = () => {
  counter.textContent = state.value;
};

// - init
minusBtn.onclick = () => {
  state.value--;
  render();
};
plusBtn.onclick = () => {
  state.value++;
  render();
};
themeBtn.onclick = () => {
  if (!document.body.dataset.bsTheme) {
    document.body.dataset.bsTheme = 'dark';
  } else {
    document.body.dataset.bsTheme = '';
  }
};
// first data render
render();

