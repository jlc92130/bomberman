document.body.onload = addEnemies;
var enemy0 = document.getElementById("enemy0");


function addEnemies() {
  for (var i=0; i<3; i++) {
    var div = document.createElement('div');
    div.setAttribute('class','enemies');
      var enemies = document.getElementClassName('enemies');
    for  (var j = 0; j < array.length; j++) {

      div.setAttribute('id', 'enemy'+j);
    }
    document.getElementById('boardgame').appendChild(div);
    randomPos(div);
  }
}


function getRandomPosition() {
  var randomX = Math.floor(Math.random()*(25));
  var randomY = Math.floor(Math.random()*(25));
  return[randomX,randomY];
}


  function randomPos(elem) {
    var xy = getRandomPosition();
    var x = xy[0]*32;
    var y = xy[1]*32;
    elem.style.top = x + 'px';
    elem.style.left = y + 'px';
  }
