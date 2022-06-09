var Player = require("./Player.js");

class Game {
  constructor(playerDetails) {
    this.playerName = playerDetails.name;
    this.playerAvatar = playerDetails.avatar;
    this.playerWins = playerDetails.wins;
    this.playerLosses = playerDetails.losses;
    this.playerDrawGames = playerDetails.drawGames;
    this.Traditional = false;
    this.Extreme = false;
  }

  select() {

  }

  setup() {

  }

  determineWinner() {
    
  }
}

module.exports = Game;
