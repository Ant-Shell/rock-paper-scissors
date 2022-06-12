class Player {
  constructor(name, avatar) {
    this.name = name;
    this.avatar = avatar || null;
    this.stats = {
      wins: 0,
      losses: 0,
      draws: 0,
    }
  }

  chooseAvatar(avatar) {
    this.avatar = avatar;
  }

  takeTurn(configObj) {
    var keys = Object.keys(configObj);
    return keys[Math.floor(Math.random() * keys.length)];
  }
}
