import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './App';
import reducers from './reducers';
import './index.css';

const defaultStore = {
  counterArray: [0, 0, 0],
  totalClicks: 0,
  step: 0,
  stateHistory: [{
    counterArray: [0, 0, 0],
    totalClicks: 0
  }]
}
const store = createStore(reducers, defaultStore);

const render = () => ReactDOM.render(
  <App
    appState={store.getState()}
    onIncrement={(index) => store.dispatch({ type: 'INCREMENT', index})}
    onDecrement={(index) => store.dispatch({ type: 'DECREMENT', index})}
    onAddCounter={() => store.dispatch({ type: 'ADD_COUNTER'})}
    onRemoveCounter={(index) => store.dispatch({ type: 'REMOVE_COUNTER', index })}
    onUndo={() => store.dispatch({ type: 'UNDO'})}
    onRedo={() => store.dispatch({ type: 'REDO'})}
  />,
  document.getElementById('root')
);

render();
store.subscribe(render);
