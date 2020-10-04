

var gamePattern = [];
var clickPattern = [];

var i = 0;

var tiles = ["green","yellow","red","blue"];

if(gamePattern.length===0){
  console.log(gamePattern.length);
  $(document).keydown(function(){
    $("h1").html("Level 1");
    nextPattern();
  });
}

$(".btn").click(
  function (){
    var classesName = this.className;
    var reqClassName = classesName.slice(4);
    console.log(reqClassName);
    clickPattern[clickPattern.length] = reqClassName;
    console.log(clickPattern);
    i = patternChecker(clickPattern[i],i);
  }
)

function nextPattern(){
  var rndmNo = Math.floor(Math.random()*4);
  gamePattern.push(tiles[rndmNo]);
  console.log(gamePattern);
  window.setTimeout(tileAnimator(tiles[rndmNo]),1000);
}

function patternChecker(reqClassName,i){
  if(reqClassName === gamePattern[i]){
    tileAnimator(reqClassName);
    console.log("OK");
    i++;
    if(i==gamePattern.length){
      $("h1").html("Level "+(i+1));
      i=0;
      clickPattern =  [];
      console.log(clickPattern);
      nextPattern();
    }
    return i;
  }else{
    var aud = new Audio("sounds/wrong.mp3");
    aud.play();
    $(document.body).addClass("game-over");
    $("h1").html("Game-Over");
    setTimeout(function(){$(document.body).removeClass("game-over")},500);
    console.log("ERROR");
    i=0;
    clickPattern = [];
    console.log(clickPattern);
    return i;
  }

}



function tileAnimator(tile){
  switch(tile){
    case "green":$(".green").fadeOut();
    $(".green").fadeIn();
    var red = new Audio("sounds/green.mp3");
    red.play();
    break;
    case "red":$(".red").fadeOut();
    $(".red").fadeIn();
    var red = new Audio("sounds/red.mp3");
    red.play();
    break;
    case "yellow":$(".yellow").fadeOut();
    $(".yellow").fadeIn();
    var red = new Audio("sounds/yellow.mp3");
    red.play();
    break;
    case "blue":$(".blue").fadeOut();
    $(".blue").fadeIn();
    var red = new Audio("sounds/blue.mp3");
    red.play();
    break;
  }
}
