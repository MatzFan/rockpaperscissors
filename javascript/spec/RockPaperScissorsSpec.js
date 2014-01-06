describe("Rock-Paper-Scissors", function() {
  var player1, player2, game;

  beforeEach(function() {

    player1 = new Player();
    player2 = new Player();
    game = new Game(player1, player2);

  });

  describe('winning and losing', function() {
    it('pairs should win/lose according to the rules', function() {
      var pairs = [['paper', 'rock'],
        ['paper', 'spock'],
        ['rock', 'scissors'],
        ['rock', 'lizard'],
        ['lizard', 'spock'],
        ['lizard', 'paper'],
        ['spock', 'scissors'],
        ['spock', 'rock'],
        ['scissors', 'lizard'],
        ['scissors', 'paper']];
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
