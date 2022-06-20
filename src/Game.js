class Game {
  constructor(player1, player2, type) {
    this.players = [player1, player2];
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

  getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
  }

  quoteGenerator(quoteArray) {
    var quote = quoteArray[this.getRandomIndex(quoteArray)];
      return quote;
    }
  }
