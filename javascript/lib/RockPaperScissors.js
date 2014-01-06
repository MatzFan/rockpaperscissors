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
  console.log("p1: " + this.player1.pick)
  console.log("p2: " + this.player2.pick)
  console.log("checking: " + [this.player1.pick, this.player2.pick])
  //console.log("pair in question: " + this.pairs[2])
  //console.log("pairs filtered: " + this.pairs.filter(function(element, index, array) {
                                //element[0] == this.player1.pick &&
                                //element[1] == this.player2.pick
  //}))
              
  
  if(this.player1.pick === this.player2.pick) {
    return null
  }
  
  if(this.pairs[this.player1.pick].indexOf(this.player2.pick) > -1 ) {
    return this.player1;
  } else {
    return this.player2;
  }
}
