var sidebarLeft = document.getElementById('sideBarLeft');
var gameSelect = document.getElementById('gameSelect');
var gameOptions = document.getElementById('gameOptions');
var sidebarRight = document.getElementById('sidebarRight');
var styleHeadline = document.getElementById('styleHeadline');
var traditionalView = document.getElementById('traditionalView');
var extremeView = document.getElementById('extremeView');
var gameResultView = document.getElementById('gameResultView');
var gameResultQuote = document.getElementById('gameResultQuote');
var styleHeadline = document.getElementById('styleHeadline');
var combatantHeadline = document.getElementById('combatantHeadline');
var customQuote = document.getElementById('customQuote');
var traditionalModeButton = document.querySelector('.game-mode-button');
var extremeModeButton = document.querySelector('.game-mode-button2');
var changeGameButton = document.querySelector('.change-game-button');
var resetScoresButton = document.querySelector('.reset-scores-button');
var rockButton = document.querySelector('.rock-button');
var paperButton = document.querySelector('.paper-button');
var scissorsButton = document.querySelector('.scissors-button');
var onepunchmanButton = document.querySelector('.onepunchman-button');
var gokuButton = document.querySelector('.goku-button');
var alienButton = document.querySelector('.alien-button');
var moquitoButton = document.querySelector('.mosquito-button');
var winDisplayPlayer1 = document.querySelector('.player1-text2');
var winDisplayPlayer2 = document.querySelector('.player2-text2');
var lossDisplayPlayer1 = document.querySelector('.player1-text3');
var lossDisplayPlayer2 = document.querySelector('.player2-text3');
var drawDisplayPlayer1 = document.querySelector('.player1-text4');
var drawDisplayPlayer2 = document.querySelector('.player2-text4');
var playerStatsWins = document.querySelectorAll('.player-stats-wins');
var playerStatsLosses = document.querySelectorAll('.player-stats-losses');
var playerStatsDraws = document.querySelectorAll('.player-stats-draws');
var player1Image = document.querySelector('.playerImage1');
var player2Image = document.querySelector('.playerImage2');

var humanPlayer;
var robotPlayer;
var game = null;
var humanChoice;
var scores;

traditionalModeButton.addEventListener('click', createNewGameTraditional)
extremeModeButton.addEventListener('click', createNewGameExtreme)
changeGameButton.addEventListener('click', displayHomePage)
resetScoresButton.addEventListener('click', resetStats)
traditionalView.addEventListener('click', function(event) {
  if (event.target.classList.contains('resize-rock-img') === true) {
    humanChoice = humanPlayer.humanTakeTurn('rock');
    game.determineWinner(humanChoice);
    displayOutcome();
    var timeout = setTimeout(displayTraditionalView, 3500);
  } else if (event.target.classList.contains('resize-paper-img') === true) {
    humanChoice = humanPlayer.humanTakeTurn('paper');
    game.determineWinner(humanChoice);
    displayOutcome();
    var timeout = setTimeout(displayTraditionalView, 3500);
  } else if (event.target.classList.contains('resize-scissors-img') === true) {
    humanChoice = humanPlayer.humanTakeTurn('scissors');
    game.determineWinner(humanChoice);
    displayOutcome();
    var timeout = setTimeout(displayTraditionalView, 3500);
  }
})

extremeView.addEventListener('click', function(event) {
  if (event.target.classList.contains('resize-rock-img') === true) {
    humanChoice = humanPlayer.humanTakeTurn('rock');
    game.determineWinner(humanChoice);
    displayOutcome();
    var timeout = setTimeout(displayExtremeView, 3500);
  } else if (event.target.classList.contains('resize-paper-img') === true) {
    humanChoice = humanPlayer.humanTakeTurn('paper');
    game.determineWinner(humanChoice);
    displayOutcome();
    var timeout = setTimeout(displayExtremeView, 3500);
  } else if (event.target.classList.contains('resize-scissors-img') === true) {
    humanChoice = humanPlayer.humanTakeTurn('scissors');
    game.determineWinner(humanChoice);
    displayOutcome();
    var timeout = setTimeout(displayExtremeView, 3500);
  } else if (event.target.classList.contains('resize-onepunchman-img') === true) {
    humanChoice = humanPlayer.humanTakeTurn('onepunchman');
  game.determineWinner(humanChoice);
    displayOutcome();
    var timeout = setTimeout(displayExtremeView, 3500);
  } else if (event.target.classList.contains('resize-goku-img') === true) {
    humanChoice = humanPlayer.humanTakeTurn('goku');
    game.determineWinner(humanChoice);
    displayOutcome();
    var timeout = setTimeout(displayExtremeView, 3500);
  } else if (event.target.classList.contains('resize-alien-img') === true) {
    humanChoice = humanPlayer.humanTakeTurn('alien');
    game.determineWinner(humanChoice);
    displayOutcome();
    var timeout = setTimeout(displayExtremeView, 3500);
  } else if (event.target.classList.contains('resize-mosquito-img') === true) {
    humanChoice = humanPlayer.humanTakeTurn('mosquito');
    game.determineWinner(humanChoice);
    displayOutcome();
    var timeout = setTimeout(displayExtremeView, 3500);
  }
})

function show(element) {
  element.classList.remove("hidden");
};

function hide(element) {
  element.classList.add("hidden");
};

function newGame(type) {
  humanPlayer = new Player('Human');
  robotPlayer = new Player('Robot');
  game = new Game(humanPlayer, robotPlayer, type);
  game.select();
  game.setup();
}

function createNewGameExtreme() {
  newGame('extreme');
  displayExtremeView();
}

function createNewGameTraditional() {
  newGame('traditional');
  displayTraditionalView();
}

function displayOutcome() {
  show(gameResultView);
  show(gameResultQuote);
  hide(extremeView);
  hide(traditionalView);
  hide(gameSelect);
  hide(styleHeadline);
  hide(combatantHeadline);
}

function displayHomePage() {
  show(gameSelect);
  show(styleHeadline);
  hide(combatantHeadline);
  hide(traditionalView);
  hide(extremeView);
  hide(gameResultView);
}

  function resetStats() {
    if (game === null) {
      return;
  } else {
    for (var i = 0 ; i < game.players.length; i++) {
      game.players[i].stats['wins'] = 0;
      game.players[i].stats['losses'] = 0;
      game.players[i].stats['draws'] = 0;
      playerStatsWins[i].innerText = `Wins: ${game.players[i].stats['wins']}`
      playerStatsLosses[i].innerText = `Losses: ${game.players[i].stats['losses']}`
      playerStatsDraws[i].innerText = `Draws: ${game.players[i].stats['draws']}`
    }
  }
}

function classChecker(id, className) {
  var classname = id.classList.contains(className);
  return classname;
}

function displayTraditionalView() {
  show(traditionalView);
  show(combatantHeadline);
  hide(styleHeadline);
  hide(gameSelect);
  hide(extremeView);
  hide(gameResultView);
  hide(gameResultQuote);
}

function displayExtremeView() {
  show(extremeView);
  show(combatantHeadline);
  hide(styleHeadline);
  hide(traditionalView);
  hide(gameSelect);
  hide(gameResultView);
  hide(gameResultQuote);
}
