var textBox = $('.control input'); // document.querySelector('.control input');
var ship = $('.ship'); // document.querySelector('.ship');
var button = $('.control button'); // document.querySelector('.control button');

textBox.focus();

var commandEntered = function(event) {
  event.preventDefault();
  var text = textBox.val(); // textBox.value;
  commandHandler(text);
  textBox.val(''); // textBox.value = '';
};

button.on('click', commandEntered); // button.addEventListener('click', commandEntered);

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
  ship.attr('src', 'resources/spaceship.png'); // ship.src = 'resources/spaceship.png';
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
  var shipLeftText = ship.css('left'); // ship.style.left;
  var shipBottomText = ship.css('bottom'); // ship.style.bottom;
  var shipLeftPosition = parseInt(shipLeftText, 10);
  var shipBottomPosition = parseInt(shipBottomText, 10);
  var properties = {
    left: shipLeftPosition + displacement[0] + 'px',
    bottom: shipBottomPosition + displacement[1] + 'px'
  };
  ship.css(properties);
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
  ship.attr('src', 'resources/explode.png'); // ship.src = 'resources/explode.png';
  // alert('Command not recognized');
};

