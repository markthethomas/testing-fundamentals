// To get set up, you'll need to get ava installed
// npm i -g ava
// Run tests for each section by running npm run <step number>
// example: `npm run 1`
//
// Generally, there are two broad types of testing, commonly called glass-box and black-box. However,
// modern software development has blurred the distinction between the two. Black-box used to refer to
// using requirements, while glass-box referred to using source code.
//
// For our purposes, we'll focus more on specific types of testing, including:
// - integration
// - end-to-end
// - unit
//
// These exist on a continuum whose granularity is primarily the number of components.
// The more components being tested, the more likely it is to be end-to-end or integration.
// Unit testing focuses more on individual units of software (modules, objects, functions, methods etc.)

import test from 'ava';

function multiply(n, by) {
  if (typeof n !== 'number' || typeof by !== 'number') {
    throw new TypeError('Only multiply numbers!');
  }
  return n * by;
}

function multiplyBy2(n) {
  return multiply(n, 2);
}

// Create
test('multiply(), positive ints', t => {
  t.is(multiply(2,3), 6);
  t.is(multiply(3,4), 12);
});

test('multiply(), negatives', t => {
  t.is(multiply(2,-3), -6);
  t.is(multiply(-2,3), -6);
});

test('multiply(), non-ints', t => {
  try {
    multiply('2', 2);
  } catch (e) {
    t.is(e.message, 'Only multiply numbers!');
  }

  try {
    multiply(2, '2');
  } catch (e) {
    t.is(e.message, 'Only multiply numbers!');
  }
});

// Create a function, multiplyBy2, that will fix the multiplier
test('multiplyBy2(), positive ints', t => {
  t.is(multiplyBy2(2), 4);
  t.is(multiplyBy2(3), 6);
});

test('multiplyBy2(), negative values', t => {
  t.is(multiplyBy2(2), 4);
});

test('multiplyBy2(), non-ints', t => {
  try {
    multiplyBy2('2');
  } catch (e) {
    t.is(e.message, 'Only multiply numbers!')
  }
});
