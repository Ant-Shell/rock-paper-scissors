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

  determineWinner() {
  var player1Result = this.players[0].takeTurn(this.rules);
  var player2Result = this.players[1].takeTurn(this.rules);
  var win = this.winquoteDisplay(gameWinQuotes);
  var lose = this.lossQuoteDisplay(gameLossQuotes);
  var draw = this.drawQuoteDisplay(gameDrawQuotes);

  if (player1Result === player2Result) {
    this.players[0].stats.draws ++;
    this.players[1].stats.draws ++ ;
      return [draw, player1Result, player2Result];
    } else if (this.rules[player2Result].includes(player1Result)) {
      this.players[0].stats.losses++
      this.players[1].stats.wins++
      console.log("Player2 value", this.rules[player2Result])
      console.log("Player1 key", player1Result)
      return [lose, player1Result, player2Result];
    } else if (!this.rules[player2Result].includes(player1Result)) {
      this.players[0].stats.wins++
      this.players[1].stats.losses++
      console.log("Player2 value", this.rules[player2Result])
      console.log("Player1 key", player1Result)
      return [win, player1Result, player2Result];
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
