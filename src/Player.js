class Player {
  constructor(name) {
    this.name = name;
    this.stats = {
      wins: 0,
      losses: 0,
      draws: 0,
    }
  }

  chooseAvatar(avatar) {
    this.avatar = avatar;
  }


  humanTakeTurn(selection) {
    var player1Result = selection;
    if (player1Result === "rock") {
      return "rock";
    } else if (player1Result === "scissors") {
      return "scissors";
    } else if (player1Result === "paper") {
    return "paper";
  } else if (player1Result === "onepunchman") {
    return "onepunchman";
  } else if (player1Result === "goku") {
    return "goku";
  } else if (player1Result === "alien") {
    return "alien";
  } else if (player1Result === "mosquito") {
    return "mosquito";
  }
}

  takeTurn(configObj) {
    var keys = Object.keys(configObj);
    return keys[Math.floor(Math.random() * keys.length)];
  }
}
