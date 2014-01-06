describe("Rock-Paper-Scissors", function() {
  var player1, player2, game, pairs, outcomes;

  beforeEach(function() {

    player1 = new Player('Player 1');
    player2 = new Player('Player 2');
    game = new Game(player1, player2);
    pairs = [['paper', 'rock'],
             ['paper', 'spock'],
             ['rock', 'scissors'],
             ['rock', 'lizard'],
             ['lizard', 'spock'],
             ['lizard', 'paper'],
             ['spock', 'scissors'],
             ['spock', 'rock'],
             ['scissors', 'lizard'],
             ['scissors', 'paper']];
  });

  describe('winning and losing', function() {
    it('pairs should win/lose according to the rules', function() {
      outcomes = pairs.map(function([winner, loser]) {
        player1.picks(winner);
        player2.picks(loser);
        return game.winner();
      });
      function isPlayer1(element, index, array) {
        return (element === player1);
      };
      expect(outcomes.every(isPlayer1)).toBe(true);
    });
  });

  describe('outcome string', function() {
    it('should say "winnermove verbs losermove"', function() {
      outcomeStrings = pairs.map(function([winner, loser]) {
        player1.picks(winner);
        player2.picks(loser);
        return game.outcomeString(); 
      });
      outcomes = ["paper covers rock",
                  "paper disproves spock",
                  "rock crushes scissors",
                  "rock crushes lizard",
                  "lizard poisons spock",
                  "lizard eats paper",
                  "spock smashes scissors",
                  "spock vaporizes rock",
                  "scissors decapitate lizard",
                  "scissors cut paper"]
      expect(outcomeStrings).toEqual(outcomes)
    });
  });


  describe('draws', function() {
    it('should result in no winner', function() {
      var drawGameResults = ['rock', 'paper', 'scissors'].map(function(x) {
        player1.picks(x);
        player2.picks(x);
        return game.winner();
        expect(drawGameResults).toEqual([null, null, null]);
      });
    });
  });
});
