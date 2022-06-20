class Player {
  constructor(name) {
    this.name = name;
    this.stats = {
      wins: 0,
      losses: 0,
      draws: 0,
    }
  }

  takeTurn(configObj) {
    var keys = Object.keys(configObj);
    return keys[Math.floor(Math.random() * keys.length)];
  }
}
