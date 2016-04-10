var Rx = require('rxjs/Rx');

// Without handling of errors

var bar = Rx.Observable.create((observer) => {
  console.log("Hello");
  observer.next(42);
  observer.next(100);
  observer.next(200);
  setTimeout(() => {
    observer.next(300);
  }, 1000);
});

bar.subscribe((x) => {
  console.log(x);
});

/******************************************************************************/

// Handling errors

var bar = Rx.Observable.create((observer) => {
  try {
    console.log("Hello");
    observer.next(42);
    observer.next(100);
    observer.next(200);
    setTimeout(() => {
      observer.next(300);
    }, 1000);
  } catch (err) {
    observer.error(new Error('bad'));
  }

});

bar.subscribe(function nextValueHandler(x) {
  console.log(x);
}, function errorHandler(err) {
  console.log('Something went wrong: ' + error);
});
