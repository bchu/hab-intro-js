var textBox = document.querySelector('.control input');
var ship = document.querySelector('.ship');
var button = document.querySelector('.control button');


var commandEntered = function(event) {
  event.preventDefault();
  var text = textBox.value;
  commandHandler(text);
  textBox.value = '';
};

button.addEventListener('click', commandEntered);

var commandHandler = function(cmd) {
  var dispatch = {
    launch: launch,
    go: go,
    change: change
  };
  var words = cmd.split(' ');
  var firstWord = words[0];
  words.shift();
  var handler = dispatch[firstWord];
  if (handler === undefined) {
    return wrongCommand();
  }
  handler(words);

  // if (firstWord == 'launch') {
  //   launch();
  // }
  // else if (firstWord === 'go') {
  //   go(words);
  // }
  // else if (firstWord === 'change') {
  //   change(words);
  // }
  // else {
  //   wrongCommand();
  // }
};

var isLaunched = false;
var isExploded = false;
var launch = function() {
  if (isLaunched || isExploded) {
    return wrongCommand();
  }
  isLaunched = true;
  change(['image', 'resources/spaceship.png']);
};

var go = function(commandWords) {
  if (!isLaunched || isExploded) {
    return wrongCommand();
  }

  var directions = {
    left: [-80, 0],
    right: [80, 0],
    up: [0, 80],
    down: [0, -80]
  };
  var displacement = directions[commandWords[0]];
  if (displacement === undefined) {
    wrongCommand();
  }
  var shipLeftPosition = parseInt(ship.style.left.split('px').join(''), 10);
  var shipBottomPosition = parseInt(ship.style.bottom.split('px').join(''), 10);
  ship.style.left = shipLeftPosition + displacement[0] + 'px';
  ship.style.bottom = shipBottomPosition + displacement[1] + 'px';
  // var properties = {
  //   left: shipLeftPosition + displacement[0] + 'px',
  //   bottom: shipBottomPosition + displacement[1] + 'px'
  // };
  // $(ship).animate(properties);
};

var change = function(commandWords) {
  if (!isLaunched || isExploded) {
    return wrongCommand();
  }

  if (commandWords[0] == 'image') {
    ship.src = commandWords[1];
  }
  else {
    return wrongCommand();
  }
};

var wrongCommand = function() {
  isLaunched = true;
  isExploded = true;
  ship.src = 'resources/explode.png';
  // alert('Command not recognized');
};

