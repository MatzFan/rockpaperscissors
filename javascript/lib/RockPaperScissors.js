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

  this.pairs = {'paper':['rock','spock'],
                'rock':['scissors', 'lizard'],
                'lizard':['spock', 'paper'],
                'spock':['scissors', 'rock'],
                'scissors':['lizard', 'paper']};
}

Game.prototype.winner = function() {
  if(this.player1.pick === this.player2.pick) {
    return null
  }
  
  if(this.pairs[this.player1.pick].indexOf(this.player2.pick) > -1 ) {
    return this.player1;
  } else {
    return this.player2;
  }
}
