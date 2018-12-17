// Business Logig
var humarPlayer1
var humanPlayer2
var machinePlayer
//var activePlayer
//


function PigDice(diceSides){

  this.diceSides = diceSides;

  this.roll = function() {
    return Math.floor(Math.random() * this.diceSides) + 1;
  };
};

function Player(active){
  alert("Player Contr");
  this.playerName;
  this.active=active;
  this.roll=0;
  this.totalScore=0;
  this.runningScore=0
}

// User Interface Login
$(document).ready(function(){
  $("#player-1-name").keyup(function(){
    $("#player-one-name").text(this.value)
  })

$("#new-game").click(function(){
  alert("New Game ");
  $("lbScore1Label").empt();

})
  function displayDiceNumber(number) {
    var placeholder = document.getElementById('placeholder');
    placeholder.innerHTML = number;
  }

  var displayObject = document.getElementById('dice-display');

  $("#dice-display").click(function(){
    var diceCurrentSide = new PigDice(6);
    displayDiceNumber(diceCurrentSide.roll());

  })

})
