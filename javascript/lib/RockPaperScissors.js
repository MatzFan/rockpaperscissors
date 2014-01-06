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
}

Game.prototype.pairs = {'paper':{'rock':'covers', 'spock':'disproves'},
                        'rock':{'scissors':'crushes', 'lizard':'crushes'},
                        'lizard':{'spock':'poisons', 'paper':'eats'},
                        'spock':{'scissors':'smashes', 'rock':'vaporizes'},
                        'scissors':{'lizard': 'decapitate', 'paper':'cut'}};

Game.prototype.winner = function() {
  if(this.player1.pick === this.player2.pick) {
    return null
  }
  
  if(this.pairs[this.player1.pick][this.player2.pick] != null ) {
    return this.player1;
  } else {
    return this.player2;
  }
}

Game.prototype.loser = function() {
  return (this.winner() === this.player1) ? this.player2 : this.player1;
}


Game.prototype.outcomeString = function() {
  var winnerPick = this.winner().pick;
  var loserPick = this.loser().pick;
  var verb = this.pairs[winnerPick][loserPick];
  return [winnerPick,verb,loserPick].join(' ');
}
