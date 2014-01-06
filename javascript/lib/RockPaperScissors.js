function Player(name) {
  this.name = name;
  // console.log("New player created")
}

Player.prototype.picks = function(pick) {
  //a setter!
  this.pick = pick;
}

function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;

  this.pairs = new Array();
  this.pairs["rock"] = "scissors";
  this.pairs["scissors"] = "paper";
  this.pairs["paper"] = "rock";
}

Game.prototype.winner = function() {
  console.log("p1: " + this.player1.pick)
  console.log("p1paired: " + this.pairs[this.player1.pick])
  console.log("p2: " + this.player2.pick)
  
  if(this.player1.pick === this.player2.pick) {
    return null
  }
  
  if(this.pairs[this.player1.pick] === this.player2.pick) {
    return this.player1;
  } else {
    return this.player2;
  }
}
