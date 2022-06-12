class Game {
  constructor(player1, player2, type) {
    this.players = new Array(player1, player2);
    this.type = type;
    this.extreme = false;
    this.rules = null;
  }

  select() {
    // logic for game selection
    // when invoked, chooses the game type - traditional or variation (extreme?); based on user selection
    // Selects type of game (boolean value - flip true / false?)
    if (this.type === 'extreme') {
      this.extreme = true;
    }
  }

  setup() {
    // based on return value of selectGame(?) - or current values of this.Traditional / this.Extreme (?)
    // if gameTraditional was chosen (true boolean value), set up game with traditional ruleset
    // if gameExtreme was chosen (true boolean value), set up game with "Extreme" ruleset (TBD)
    if (this.extreme === true) {
      this.rules = configExtreme;
    } else {
      this.rules = configTraditional;
    }
  }

  determineWinner() {
  // based on return value of Player.takeTurn() - decide which player is the winner
	// Compare values based on game mode(?)
  var player1Result = this.players[0].takeTurn(this.rules);
  var player2Result = this.players[1].takeTurn(this.rules);
  var player2Result = Object.keys(this.rules)[0];
  // configTraditional[keyvalue]

  var win = this.winquoteDisplay(gameWinQuotes);
  var lose = this.lossQuoteDisplay(gameLossQuotes);
  var draw = this.drawQuoteDisplay(gameDrawQuotes);

  if (player1Result === player2Result) { // This works
    this.players[0].stats.draws ++;
    this.players[1].stats.draws ++ ;
      return [draw, player1Result, player2Result];
    // } else if (player1Result.includes(player2Result)) { // This doesn't
    } else if (this.rules[player1Result] !== player2Result) {
      this.players[0].stats.wins++
      this.players[1].stats.losses++
      return [win, player1Result, player2Result];
    // } else if (!player1Result.includes(player2Result)) { // This doesn't either
    } else {
      this.players[0].stats.losses++
      this.players[1].stats.wins++
      return [lose, player1Result, player2Result];
    }
  }


  // if (player1Result.includes(player2Result)) {
  //   this.players[0].stats.wins++ ;
  //   this.players[1].stats.losses++ ;
  //   return [win, player1Result, player2Result];
  // } else if (!player1Result.includes(player2Result)) {
  //   this.players[0].stats.losses++ ;
  //   this.players[1].stats.wins++ ;
  //   return [lose, player1Result, player2Result];
  // } else if (player1Result === player2Result) {
  // // } else {
  //   this.players[0].stats.draws ++;
  //   this.players[1].stats.draws ++ ;
  //   console.log(draw)
  //   return [draw, player1Result, player2Result];
  //   }

  getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
  }

  lossQuoteDisplay(gameLossQuotes) {
    var lossQuote = gameLossQuotes[this.getRandomIndex(gameLossQuotes)];
    return lossQuote;
  }

  winquoteDisplay(gameWinQuotes) {
    var winQuote = gameWinQuotes[this.getRandomIndex(gameWinQuotes)];
    return winQuote;
  }

  drawQuoteDisplay(gameDrawQuotes) {
    var drawQuote = gameDrawQuotes[this.getRandomIndex(gameDrawQuotes)];
    return drawQuote;
  }

}
