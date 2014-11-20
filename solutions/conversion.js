1 + 1

console.log(5);

var a = 5;

var array = ['s', 5, 8];

var third = array[2];

var lastElement = array[array.length - 1];

var dictionary = {
  'hello': 'hi',
  'there': 'that'
};

var dictionary = {
  hello: 'hi',
  there: 'that'
};

word = dictionary['hello'];
word = dictionary.hello;

var square = function(num) {
  return num * num;
};

c = square(num);

if (true) {
  return true;
}
else if (false) {
  return null;
  return undefined;
}
else if (false || true) {
  return true && false;
}
else if (0 === 1) {
  return 0;
}
else {
  return 'error';
}

while (a > 0) {
  a -= 1;
}

for (var x = 0; x < 5; x+=1) {
  console.log(Math.pow(x,2));
}

var b = 'hello';

b[0] === 'h';

var zeroToThree = b.slice(0,3);

var sheep = function(x) { return x; };

messThis = 1;
var willDo = function() {
  messThis += 1;
};

willDo();
willDo();
console.log(messThis);

var higherOrder = function(num) {
  var inception = function() {
    return num + 5;
  };
  return inception;
};

higherOrder(6)();

var higherOrderRedux = function(messThis) {
  var willDo = function() {
    messThis += 1;
  };
  willDo();
  return messThis;
};

higherOrderRedux(4);

