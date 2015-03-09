var textBox = $('.control input'); // document.querySelector('.control input');
var ship = $('.ship'); // document.querySelector('.ship');
var button = $('.control button'); // document.querySelector('.control button');

textBox.focus();

var commandEntered = function(event) {
  event.preventDefault();
  var text = textBox.val(); // textBox.value;
  textBox.val(''); // textBox.value = '';

  var words = text.split(' ');
  var firstWord = words[0];
  var secondWord = words[1];

  if (firstWord === 'launch') {
    launch();
  }
  else if (firstWord === 'go') {
    go(secondWord);
  }
  else if (firstWord === 'rotate') {
    rotate(secondWord);
  }
  else {
    wrongCommand();
  }
};

button.on('click', commandEntered); // button.addEventListener('click', commandEntered);

var isLaunched = false;
var isDestroyed = false;

var launch = function() {
  if (isDestroyed) {
    return;
  }
  isLaunched = true;
  ship.attr('src', 'resources/spaceship.png'); // ship.src = 'resources/spaceship.png';
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
  var displacement = directions[direction];
  if (displacement === undefined) {
    wrongCommand();
  }

  var shipLeftText = ship.css('left'); // ship.style.left;
  var shipBottomText = ship.css('bottom'); // ship.style.bottom;
  var shipLeftPosition = parseInt(shipLeftText);
  var shipBottomPosition = parseInt(shipBottomText);
  var properties = {
    left: shipLeftPosition + displacement[0] + 'px',
    bottom: shipBottomPosition + displacement[1] + 'px'
  };
  ship.css(properties);
  // $(ship).animate(properties);
};

var rotate = function(amount) {
  if (!isLaunched) {
    return wrongCommand();
  }

  var degrees = parseInt(amount);
  ship.css({
    transition: '1s ease-in',
    transform: 'rotate(' + degrees + 'deg)'
  });
};

var wrongCommand = function() {
  isLaunched = false;
  isDestroyed = true;
  ship.attr('src', 'resources/explode.png'); // ship.src = 'resources/explode.png';
  // alert('Command not recognized');
};

