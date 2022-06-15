class Game {
  constructor(player1, player2, type) {
    this.players = new Array(player1, player2);
    this.type = type;
    this.extreme = false;
    this.rules = null;
  }

  select() {
    if (this.type === 'extreme') {
      this.extreme = true;
    }
  }

  setup() {
    if (this.extreme === true) {
      this.rules = configExtreme;
    } else {
      this.rules = configTraditional;
    }
  }

  determineWinner(humanChoice) {
  // var player1Result = this.players[0].takeTurn(this.rules);
  // var player1Result = humanTakeTurn();
  var player1Result = humanChoice;
  var player2Result = this.players[1].takeTurn(this.rules);
  var winQuote = this.winQuoteDisplay(gameWinQuotes);
  var loseQuote = this.lossQuoteDisplay(gameLossQuotes);
  var drawQuote = this.drawQuoteDisplay(gameDrawQuotes);

  if (player1Result === player2Result) {
    this.players[0].stats.draws ++;
    this.players[1].stats.draws ++ ;
    customQuote.innerText = drawQuote
      drawDisplayPlayer1.innerText = `Draws: ${this.players[0].stats.draws}`
      drawDisplayPlayer2.innerText = `Draws: ${this.players[1].stats.draws}`
    } else if (this.rules[player2Result].includes(player1Result)) {
      this.players[0].stats.losses++
      this.players[1].stats.wins++
      customQuote.innerText = loseQuote
      lossDisplayPlayer1.innerText = `Losses: ${this.players[0].stats.losses}`
      winDisplayPlayer2.innerText = `Wins: ${this.players[1].stats.wins}`

    } else {
      this.players[0].stats.wins++
      this.players[1].stats.losses++
      customQuote.innerText = winQuote
      winDisplayPlayer1.innerText = `Wins: ${this.players[0].stats.wins}`
      lossDisplayPlayer2.innerText = `Losses: ${this.players[1].stats.losses}`
    }
  }

  getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
  }

  resetStats() {
    for (var i = 0 ; i < this.players.length ; i++)
    this.players[i].stats = {
      wins: 0,
      losses: 0,
      draws: 0,
    }
    // return [this.players[0].stats, this.players[1].stats]
    return this.players
  }

  lossQuoteDisplay(gameLossQuotes) {
    var lossQuote = gameLossQuotes[this.getRandomIndex(gameLossQuotes)];
    return lossQuote;
  }

  winQuoteDisplay(gameWinQuotes) {
    var winQuote = gameWinQuotes[this.getRandomIndex(gameWinQuotes)];
    return winQuote;
  }

  drawQuoteDisplay(gameDrawQuotes) {
    var drawQuote = gameDrawQuotes[this.getRandomIndex(gameDrawQuotes)];
    return drawQuote;
  }
}
