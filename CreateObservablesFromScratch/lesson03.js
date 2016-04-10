// Generators

function* baz() {
  console.log('Hello');
  yield 42;
  yield 100;
  yield 200;
}

var iterator = baz();
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);

/******************************************************************************/

// How are they different from Observables?

// Observables are producers of values.
// The subscribe is the consumer of values.

// The difference is that with Observables, the producer determines when the
// values are sent. With generators, the consumers determine when the values
// are sent.

// Observer - *PUSH* from producer / Generator - *PULL* from consumers.
// Generators are more useful as a passive factory of values.
