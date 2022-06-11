class Player {
  constructor(name, avatar) {
    this.name = name;
    this.avatar = avatar || 'null';
    this.stats = {
      wins: 0,
      losses: 0,
      draws: 0,
    }
  }

  chooseAvatar(avatar) {
    this.avatar = avatar;
  }

  takeTurn(configArray) {

    var keys = Object.keys(configArray);
    return keys[Math.floor(Math.random() * keys.length)];
  }

  updateStat(statName) {
    this.stats[statName] ++
  }
}
