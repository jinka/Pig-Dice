// Busines Logic
var humanPlayer1, humanPlayer2;

var throwDice = function(){
  return Math.floor(Math.random()*6)+1;
}

function Player(active){
  this.playerName;
  this.active=active;
  this.runningScore=0;
  this.totalScore=0
  this.roll=0;
}

Player.prototype.hold = function () {
  this.totalScore += this.runningScore;
  this.runningScore = 0;
  alert(this.playerName + ", you hold your turn, we save your scores.");
}

Player.prototype.rollOne = function() {
  if (this.roll == 1) {
    this.runningScore = 0;
    this.roll = 0;
    this.totalScore=0
    alert(this.playerName + ", Your current output is 1, timeout.")
  } else {
    this.runningScore += this.roll;
  }
}
Player.prototype.winnerCheck = function () {
  if (this.totalScore >= 100) {
    alert(this.playerName + " Congratulations, you are the Winner ");
  }
}

$("document").ready(function(){
  humanPlayer1=new Player(true);
  humanPlayer2=new Player(false);
  $("#player1Name").text("Player 1");
  $("#player2Name").text("Player 2");

  $("#new-game").click(function(){
    $("#player1Name").text($("#player-1-name").val());
    $("#player2Name").text($("#player-2-name").val());;
    humanPlayer1=new Player(true);
    humanPlayer2=new Player(false);
    humanPlayer1.playerName=$("#player-1-name").val()
    humanPlayer2.playerName=$("#player-2-name").val()

  })

  $("#dice-display-p1").click(function(){
    humanPlayer1.roll=throwDice();
    humanPlayer1.rollOne()
    $("#placeholder-1").text(humanPlayer1.roll);
    $("#lbScore1Label").text(humanPlayer1.runningScore);
    $("#lbScore1Value").text(humanPlayer1.totalScore);
  })

  $("#dice-display-p2").click(function(){
    humanPlayer2.roll=throwDice();
    humanPlayer2.rollOne()
    $("#placeholder-2").text(humanPlayer2.roll);
    $("#lbScore2Label").text(humanPlayer2.runningScore);
    $("#lbScore2Value").text(humanPlayer2.totalScore);
  })

  $("#hold-p1").click(function(){
    humanPlayer1.hold();
    $("#lbScore1Value").text(humanPlayer1.totalScore);
    $("#lbScore1Label").text(humanPlayer1.runningScore);
    $("#placeholder-1").text(humanPlayer1.runningScore);
    humanPlayer1.winnerCheck();
  });
  $("#hold-p2").click(function(){
    humanPlayer2.hold();
    $("#lbScore2Value").text(humanPlayer2.totalScore);
    $("#lbScore2Label").text(humanPlayer2.runningScore);
    $("#placeholder-2").text(humanPlayer2.runningScore);
    humanPlayer2.winnerCheck();

  });

})
