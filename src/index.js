import './styles.css';

const counter = document.getElementById('counter');
const add = document.getElementById('add');
const sub = document.getElementById('sub');
const async = document.getElementById('async');
const theme = document.getElementById('theme');

let state = 0;

const render = () => {
  counter.textContent = state;
}

render();

add.onclick = () => {
  render(++state);
}

sub.onclick = () => {
  render(--state);
}

async.onclick = () => {
  setTimeout(() => render(++state), 2000);
}

theme.onclick = () => {
  document.body.classList.toggle('dark');
}
