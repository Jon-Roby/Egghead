var Rx = require('rxjs/Rx');

var bar = Rx.Observable.create((observer) => {
  try {
    console.log("Hello");
    observer.next(42);
    observer.next(100);
    observer.next(200);
    observer.complete();
    setTimeout(() => {
      observer.next(300);
    }, 1000);
  } catch (err) {
    observer.error(new Error('bad'));
  }

});

bar.subscribe(
  function nextValueHandler(x) {
    console.log(x);
  }, function errorHandler(err) {
    console.log('Something went wrong: ' + error);
  }, function completeHandler() {
    console.log('done');
  }
);

// Notice that if you run this, the setTimeout function won't run.

/******************************************************************************/
