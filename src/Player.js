class Player {
  constructor(name)) {
    this.name = name;
    this.avatar = null;
    this.wins = 0;
    this.losses = 0;
    this.drawGames = 0;
  }

  chooseAvatar() {
    var avatarList = [avatar1, avatar2, avatar3, avatar4, avatar5]
    for (var i = 0; i < avatarList.length; i++) {
      console.log(avatarList[i])
    }
  }

  chooseGame() {

  }

  takeTurn() {

  }
}

module.exports = Player;
