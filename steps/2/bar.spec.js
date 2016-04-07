'use strict';
// Functions are generally easy to test because they should return values and
// not much more.
//
// Creating Objects is generally harder because there's greater overall complexity
import test from 'ava';
const sinon = require('sinon');

class Drink {
  constructor() {}
}

class Cidre extends Drink {
  constructor(remainingOunces, name) {
    super();
    this.remainingOunces = remainingOunces || 10;
    this.name = name || 'Cidre';
  }

  drink(oz) {
    this.remainingOunces = this.remainingOunces - oz;
    console.log('${oz}oz. were had of this fine cidre!');
  }
}

// method() within a class is the same as:
//
// Wine.prototype.drink = function (oz) {
//   this.remainingOunces = this.remainingOunces - oz;
//   console.log('${oz}oz. were had of this fine cidre!');
// };

test('Asking the object where it came from (heritage)', t => {
  const apfelwine = new Cidre(12, 'apfelwine');
  t.true(Drink.isPrototypeOf(Cidre));
});

test('Inspeecting object properties', t => {
  const apfelwine = new Cidre(12, 'apfelwine');
  t.is(apfelwine.name, 'apfelwine');
  t.is(apfelwine.remainingOunces, 12);
});
