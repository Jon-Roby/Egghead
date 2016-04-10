var Rx = require('rxjs/Rx');

// Uncomment the code in each section to view logs in terminal

/******************************************************************************/

// function foo() {
//   console.log('Hello');
//   return 42;
// }
//
// console.log(foo());
// console.log(foo.call());
// console.log("____________________");
//
// var bar = Rx.Observable.create(function(observer) {
//   console.log('Hello');
//   observer.next(42);
// });
//
// // Observables use lazy computation. If you don't subscribe,
// // then just like the function above, nothing is evaluated.
// bar.subscribe(function(x) {
//   console.log(x);
// });
// bar.subscribe(function(x) {
//   console.log(x);
// });

/******************************************************************************/

// Observables don't load asynchronously. Just like functions.

// function foo() {
//   console.log('Hello');
//   return 42;
// }
//
// console.log("before");
// console.log(foo.call());
// console.log("after");
// console.log("____________________");
//
// var bar = Rx.Observable.create(function(observer) {
//   console.log('Hello');
//   observer.next(42);
// });
//
// console.log("before");
// bar.subscribe(function(x) {
//   console.log(x);
// });
// console.log("after");

/******************************************************************************/

// The difference is that with observables you can return multiple values.

function foo() {
  console.log('Hello');
  return 42;
}

console.log("before");
console.log(foo.call());
console.log("after");
console.log("____________________");

var bar = Rx.Observable.create(function(observer) {
  console.log('Hello');
  observer.next(42);
  observer.next(100);
  observer.next(200);
  setTimeout(function() {
    observer.next(300);
  }, 1000);
});

console.log("before");
bar.subscribe(function(x) {
  console.log(x);
});
console.log("after");
