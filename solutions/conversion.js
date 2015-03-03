1 + 1

console.log(5);

var a = 5;

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

var b = 'hello';

b[0] = 'j'; // b = 'jello'

var array = ['s', 5, 8];

var third = array[2];

var zeroToThree = array.slice(0,3);

var lastElement = array[array.length - 1];

var newArray = [];

newArray.push(1);
newArray.push(2);
newArray.pop(); // 2
newArray.unshift('a');
newArray.shift(); // 'a'


/////////////////////////////////////////////


var square = function(num) {
  return num * num;
};

// I don't use this ever:
function square(num) {
  return num * num;
}

c = square(a);

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

for (var x = 0; x < 5; x += 1) {
  console.log(Math.pow(x, 2));
}


/////////////////////////////////////////////


var sheep = function(x) { return x; };

var higherOrder = function(num) {
  var inception = function() {
    num += 5;
  };
  inception();
  return num;
};

higherOrder(6); // returns 11

var messThis = 1;
var willDo = function() {
    messThis += 6;
};

willDo();

console.log(messThis); // 7
