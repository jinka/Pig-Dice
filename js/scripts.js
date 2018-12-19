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
  alert(this.playerName + ", your turn is over, pass the mouse!");
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
    // $("#results").css("background-color","#4286f4")
    $("#player-two-name").text($("#player-2-name").val());
    $("#player-one-name").text($("#player-1-name").val());
    $("#act-player-name").text($("#player-one-name").text())
    $("#player1Name").text($("#player-one-name").text())
    $("#player2Name").text($("#player-two-name").text())
    humanPlayer1 = new Player(true);
    humanPlayer2 = new Player(false)
    playerOneName = $("#player-one-name").text()
    playerTwoName = $("#player-two-name").text()
    humanPlayer1.playerName=playerOneName;
    humanPlayer2.playerName=playerTwoName;
    activePlayer=humanPlayer1
  })

  function displayDiceNumberP1(number) {
    var placeholderP1 = document.getElementById('placeholder-1');
    placeholderP1.innerHTML = number;
  }

  function displayDiceNumberP2(number) {
    var placeholderP2 = document.getElementById('placeholder-2');
    placeholderP2.innerHTML = number;
  }

  $("#hold-p1").click(function(){
    humanPlayer1.hold();
    $("#lbScore1Value").text(humanPlayer1.totalScore);
  })
  $("#hold-p2").click(function(){
    humanPlayer2.hold();
    $("#lbScore2Value").text(humanPlayer2.totalScore);
  })

  $("#dice-display-p1").click(function(){
    diceCurrentSide = new PigDice(6);
    displayDiceNumberP1(diceCurrentSide.roll());
    humanPlayer1.roll = diceCurrentSide.roll();
    humanPlayer1.rollone();
    $("#lbScore1Label").text(humanPlayer1.runningScore);
    $("#act-player-name").text($("#player-one-name").text())
  })

  $("#dice-display-p2").click(function(){
    diceCurrentSide = new PigDice(6);
    displayDiceNumberP2(diceCurrentSide.roll());
    humanPlayer2.roll = diceCurrentSide.roll();
    humanPlayer2.rollone();
    // $("#results").css("background-color","#4286f4")
    $("#lbScore2Label").text(humanPlayer2.runningScore);
    $("#act-player-name").text($("#player-two-name").text())
  })

})
