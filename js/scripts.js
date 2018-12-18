// Business Logic

var humarPlayer1;
var humanPlayer2;
var machinePlayer;
var activePlayer;
var diceCurrentSide=0;
var playerOneName;
var playerTwoName

var resetValues=function() {

  $("#player-one-name").text("");
  $("#player-two-name").text("");
}

function PigDice(diceSides){

  this.diceSides = diceSides;

  this.roll = function() {
    return Math.floor(Math.random() * this.diceSides) + 1;
  };
};

function Player(active){
  this.playerName;
  this.active = active;
  this.roll = 0;
  this.totalScore = 0;
  this.runningScore = 0;
}

Player.prototype.hold = function() {
  this.totalScore += this.runningScore;
  this.runningScore = 0;
}
Player.prototype.rollone = function() {
  if (this.roll == 1) {
    this.runningScore = 0;
    alert(this.playerName + " Your current output is 1, timeout.")
    if (activePlayer == player1) {
      activePlayer = player2
    } else {
      activePlayer = player1
    }

  } else {
    this.runningScore += this.roll;
  }
}

// User Interface Logic
$(document).ready(function(){

  $("#new-game").click(function(){
    $("#results").css("background-color","#4286f4")
    $("#player-two-name").text($("#player-2-name").val());
    $("#player-one-name").text($("#player-1-name").val());

    $("#act-player-name").text($("#player-one-name").text())

    player1 = new Player(true);
    player2 = new Player(false)

    playerOneName = $("#player-one-name").text()
    playerTwoName = $("#player-two-name").text()

    player1.playerName=playerOneName;
    player2.playerName=playerTwoName;

    activePlayer=player1
  })

  $("#hold").click(function(){

    activePlayer.hold();
    // $("#lbScore1Value").text(activePlayer.totalScore);

    if (activePlayer == player1) {
      $("#results").css("background-color","#4286f4")
      $("#lbScore1Label").text(activePlayer.runningScore);
      $("#act-player-name").text($("#player-one-name").text())
    } else {
      $("#results").css("background-color","#e541f4")

      $("#lbScore2Label").text(activePlayer.runningScore);
      $("#act-player-name").text($("#player-two-name").text())

    }
  })

  function displayDiceNumber(number) {;
    var placeholder = document.getElementById('placeholder');
    placeholder.innerHTML = number;
  }

  var displayObject = document.getElementById('dice-display');
  $("#dice-display").click(function(){
    diceCurrentSide = new PigDice(6);
    displayDiceNumber(diceCurrentSide.roll());
    activePlayer.roll = diceCurrentSide.roll();
    activePlayer.rollone();

    if (activePlayer == player1) {
      $("#results").css("background-color","#4286f4")
      $("#lbScore2Label").text(0)
      $("#lbScore1Label").text(activePlayer.runningScore);
      $("#act-player-name").text($("#player-one-name").text())
    } else {
      $("#results").css("background-color","#e541f4")

      $("#lbScore1Label").text(0);
      $("#lbScore2Label").text(activePlayer.runningScore);
      $("#act-player-name").text($("#player-two-name").text())
    }
  })

})
