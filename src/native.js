const counter = document.getElementById('counter');
const add = document.getElementById('add');
const sub = document.getElementById('sub');
const async = document.getElementById('async');
const theme = document.getElementById('theme');
import { createStore, applyMiddleware } from 'redux';
import { rootReducer, increment, init, decrement, asyncIncrement, darkTheme } from './redux';
import './styles.css';
import thunk from 'redux-thunk';

const logger = state => (
  next => (
    action => {
      next(action);
      console.log(state.getState());
    }
  )
)

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

const render = () => {
  const { counter: count, theme } = store.getState();
  counter.textContent = count.toString();
  document.body.className = theme;
}

store.subscribe(render);

store.dispatch(init());

add.onclick = () => {
  store.dispatch(increment());
}

sub.onclick = () => {
  store.dispatch(decrement());
}

async.onclick = () => {
  store.dispatch(asyncIncrement())
}

theme.onclick = () => {
  if (store.getState().theme) {
    return store.dispatch(init());
  }

  return store.dispatch(darkTheme());
}
