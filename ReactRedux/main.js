const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

// React (Dumb) Component
const Counter = ({
  value,
  onIncrement,
  onDecrement
}) => (
  <div>
    <h1>{value}</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
);

import { createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
const store = createStore(counter);

const render = () => {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() =>
        store.dispatch({
          type: 'INCREMENT'
        })
      }
      onDecrement={() =>
        store.dispatch({
          type: 'DECREMENT'
        })
      }
     />,
    document.getElementById('app')
  );
}

store.subscribe(render);
render();




// Plain Redux:
// const store = createStore(counter);
//
// const render = () => {
//   document.body.innerText = store.getState();
// };
//
// store.subscribe(render);
// render();
//
// document.addEventListener('click', () => {
//   store.dispatch({ type: 'INCREMENT' });
// });



// Subscribe won't render the first time here:
// console.log(store.getState());
// store.dispatch({ type: 'INCREMENT' });
// console.log(store.getState());
//
// store.subscribe(() => {
//   document.body.innerText = store.getState();
// })
//
// document.addEventListener('click', () => {
//   store.dispatch({ type: 'INCREMENT' })
// })
