
var bomb = document.getElementById("bomb");
var limitBomb = false;
var blastTop = document.getElementById("blastTop");
var blastLeft =  document.getElementById("blastLeft");
var blastRight =  document.getElementById("blastRight");
var blastBottom =  document.getElementById("blastBottom");
var blastCenter =  document.getElementById("blastCenter");
var ene


document.addEventListener("keydown",dropBomb);



function dropBomb(event) {
var keyCode = event.keyCode;
if (keyCode == 32) {
  if (limitBomb == false) {
    limitBomb = true;
    bomb.style.display = "block";
    bomb.style.top = positionTop + "px";
    bomb.style.left = positionLeft + "px";
    setTimeout(bombBlast, 3000);
    setTimeout(bombExplosion, 3000);
    setTimeout(blastDisparition, 4000);
  }
}
}

function bombExplosion() {         // disparition de la bombe au bout de 3s
  bomb.style.display = "none";
  limitBomb = false;
}

function bombBlast() {
  blastCenter.style.display = "block";
  blastCenter.style.top = bomb.offsetTop + "px";
  blastCenter.style.left = bomb.offsetLeft + "px";
    if (bomb.offsetTop == positionTop && bomb.offsetLeft == positionLeft){
    player.style.display = "none";
    modal.style.display = "block";

  }
    if (bomb.offsetTop == enemy0TopTop && bomb.offsetLeft == enemy0Left){
    player.style.display = "none";


  }

  blastTop.style.display = "block";
  blastTop.style.top = bomb.offsetTop - 32 + "px";
  blastTop.style.left = bomb.offsetLeft + "px";
  if (bomb.offsetTop - 32 == positionTop && bomb.offsetLeft == positionLeft){
  player.style.display = "none";
  modal.style.display = "block";

  }

  blastBottom.style.display = "block";
  blastBottom.style.top = bomb.offsetTop + 32 + "px";
  blastBottom.style.left = bomb.offsetLeft + "px";
  if (bomb.offsetTop + 32 == positionTop && bomb.offsetLeft == positionLeft){
  player.style.display = "none";
  modal.style.display = "block";

  }

  blastLeft.style.display = "block";
  blastLeft.style.top = bomb.offsetTop + "px";
  blastLeft.style.left = bomb.offsetLeft - 32 + "px";
  if (bomb.offsetTop == positionTop && bomb.offsetLeft - 32 == positionLeft){
  player.style.display = "none";
  modal.style.display = "block";

  }

  blastRight.style.display = "block";
  blastRight.style.top = bomb.offsetTop + "px";
  blastRight.style.left = bomb.offsetLeft + 32 + "px";
  if (bomb.offsetTop == positionTop && bomb.offsetLeft + 32 == positionLeft){
  player.style.display = "none";
  modal.style.display = "block";

  }

}


function blastDisparition() {
  blastCenter.style.display = "none";
  blastTop.style.display = "none";
  blastBottom.style.display = "none";
  blastLeft.style.display = "none";
  blastRight.style.display = "none";

}
