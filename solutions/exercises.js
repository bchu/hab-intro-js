// identical to Python's map function
// map([1,2,3], console.log)
var map = function(list, mapper) {
  var newList = [];
  for (var i = 0; i < list.length; i++) {
    var newValue = mapper(list[i]);
    newList.push(newValue);
  }
  return newList;
};

// identical to Python's itertools.reduce function
// var mult = function(a,b){ return a * b }
// reducer([2,2,2], mult, 1) === 8
var reduce = function(list, reducer, initializer) {
  var accumulation = initializer;
  for (var i = 0; i < list.length; i++) {
    accumulation = reducer(accumulation, list[i]);
  }
  return accumulation;
};

// invokeOnce takes in a function (which has no arguments) and returns another function.
// When the returned function is called, it calls func.
// However, the returned function can only be called once.
// var shout = function() { console.log('shout'); };
// var shoutOnce = invokeOnce(shout)
// shoutOnce(); // prints 'shout'
// shoutOnce(); // does nothing
var invokeOnce = function(func) {
  var called = false;
  return function() {
    if (called) return;
    called = true;
    return func();
  };
};

/*
  This is a tricky one.

  defaultedTo takes in a function (A) and defaultValue, and returns a function (B).
  If A is called without fewer arguments than it takes, return defaultValue. Otherwise, call A with the arguments.
  func.length = the number of arguments func takes.
  Inside every function is a hidden variable called "arguments" (without quotes).
  It's an array-like object (you can access the .length property and array indices).
  Look up func.apply() (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
*/
var enforceArgumentCount = function(func, defaultValue){
  var wrapper = function() {
    if (arguments.length < func.length) {
      return defaultValue;
    }
    else {
      return func.apply(null, arguments);
    }
  };
  return wrapper;
};

// THESE ARE TESTS, DO NOT MODIFY THEM.
// JavaScript does not have Python's docstrings, so we have to test the code ourself.

var list = [1,2,3,4];

var square = function(num) {
  return num * num;
};
console.log(map(list, square)); // should be [1, 4, 9, 16]

var shout = function() {
  return 'HI';
};
var shoutOnce = invokeOnce(shout);
console.log(shoutOnce()); // should be HI
console.log(shoutOnce()); // should be undefined

var sum = function(a, b) {
  return a + b;
};
console.log(reduce(list, sum, 0)); // should be 10

console.log(sum()); // should be NaN
var saferSum = enforceArgumentCount(sum, 0);
console.log(saferSum()); // should be 0
