var player = document.getElementById('player');
var positionLeft = player.offsetLeft;   // prend l abscisse
var positionTop = player.offsetTop
console.log(positionLeft);
document.addEventListener("keydown",movePlayer);


function movePlayer(event) {
  var keyCode = event.keyCode;

  if (keyCode == 39) {
    if (positionLeft < 768) {
        // player.style.property = new style;
        positionLeft = positionLeft + 32;

        player.style.left = positionLeft + 'px';

    }
  }

    else if (keyCode == 37) {

    if (positionLeft >0 ) {
        // player.style.property = new style;
        positionLeft = positionLeft - 32;

        player.style.left = positionLeft + 'px';
      }
    }

    else if (keyCode == 38)  { // up

     if (positionTop > 0) {
        // player.style.property = new style;
        positionTop = positionTop - 32;

        player.style.top = positionTop + 'px';

    }
  }


    else if (keyCode == 40) {  // up

     if (positionTop < 768) {
        // player.style.property = new style;
        positionTop = positionTop + 32;

        player.style.top = positionTop + 'px';

    }


  }
}
