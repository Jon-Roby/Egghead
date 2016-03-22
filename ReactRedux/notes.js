// The FIRST PRINCIPLE of REDUX is that
// no matter its complexity,
// the whole state of application
// is represented as a JavaScript object.

// The SECOND PRINCIPLE of REDUX is that
// you cannot
// modify it or write to it. If you want to
// modify it, you dispatch an action. An action
// is just a plain javascript object. The only
// requirement is that it has a type property.

// The THIRD PRINCIPLE of REDUX is to describe state
// mutations you have to write a function that takes
// a previous state of the app, the action being dispatched,
// and returns the next state of the app. This function has to be pure.
// This function is called the reducer.

// Difference between pure functions and impure functions:
// (1) Pure functions don't have any side-effects. No network
// requests, for example. (2) Pure functions don't modify values
// passed to them.

// The STORE has THREE IMPORTANT METHODS:
// .getState()
// .dispatch({ type: 'xyz' })
// .subscribe(() => { xyz })

// REDUX STORE created from scratch:
// const createStore = (reducer) => {
//   let state;
//   let listeners = [];
//
//   const getState = () => state;
//
//   const dispatch = (action) => {
//     state = reducer(state, action);
//     listeners.forEach(listener => listener());
//   };
//
//   const subscribe = (listener) => {
//     listeners.push(listener);
//     return () => {
//       listeners = listeners.filter(l => l !== listener);
//     }
//   };
//
//   dispatch({});
//
//   return { getState, dispatch, subscribe };
// }
