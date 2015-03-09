var textBox
var ship
var button

var commandEntered = function(event) {

};


var isLaunched = false;
var isDestroyed = false;

var launch = function() {
  if (isDestroyed) {
    return;
  }
  else {
    isLaunched = true;
  }

};

var go = function(direction) {
  if (!isLaunched) {
    return wrongCommand();
  }

  var directions = {
    left: [-80, 0],
    right: [80, 0],
    up: [0, 80],
    down: [0, -80]
  };

};

var rotate = function(amount) {
  if (!isLaunched) {
    return wrongCommand();
  }

};

var wrongCommand = function() {
  isLaunched = false;
  isDestroyed = true;

};

