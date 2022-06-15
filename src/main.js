// QuerySelectors
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


// Global variables
var humanPlayer;
var robotPlayer;
var game;
var humanChoice;
var scores;


// Event Listeners
gameSelect.addEventListener('click', function(event) {
  if (classChecker(gameSelect, extremeModeButton) === 'extreme') {
    newGame('extreme');
    displayExtremeView();
  } else if (classChecker(gameSelect, traditionalModeButton) === 'traditional') {
    newGame('traditional');
    displayTraditionalView();
  }
})

gameOptions.addEventListener('click', function(event) {
 if (classChecker(gameOptions, changeGameButton) === 'change-game-button') {
   displayHomePage();
 } else if (classChecker(gameOptions, resetScoresButton) === 'reset-scores-button') {
   resetScores();
   displayUpdatedScores();
 }
})


traditionalView.addEventListener('click', function(event) {
  if (classChecker(traditionalView, rockButton) === 'rock-button') {
  humanChoice = humanPlayer.humanTakeTurn('rock');
  game.determineWinner(humanChoice);
  displayOutcome();
  game.displayUpdatedScores();
  var timeout = setTimeout(returnToTraditionalView, 5000);
} else if (classChecker(traditionalView, paperButton) === 'paper-button') {
  humanChoice = humanPlayer.humanTakeTurn('paper');
  game.determineWinner(humanChoice);
  displayOutcome();
  game.displayUpdatedScores();
  var timeout = setTimeout(returnToTraditionalView, 5000);
} else if (classChecker(traditionalView, scissorsButton) === 'scissors-button') {
  humanChoice = humanPlayer.humanTakeTurn('scissors');
  game.determineWinner(humanChoice);
  displayOutcome();
  game.displayUpdatedScores();
  var timeout = setTimeout(returnToTraditionalView, 5000);
  }
})

  // game.determineWinner(humanChoice)
  //game.displayUpdatedScores()
  // displayOutcome()
  // timeout = setTimeout(returnToTraditionalView, 5000)


extremeView.addEventListener('click', function(event) {
  if (classChecker(traditionalView, rockButton) === 'rock-button') {
  humanChoice = humanPlayer.humanTakeTurn('rock');
  game.determineWinner(humanChoice);
  displayOutcome();
  game.displayUpdatedScores();
  timeout;
} else if (classChecker(traditionalView, paperButton) === 'paper-button') {
  humanChoice = humanPlayer.humanTakeTurn('paper');
  game.determineWinner(humanChoice);
  displayOutcome();
  game.displayUpdatedScores();
  timeout;
} else if (classChecker(traditionalView, scissorsButton) === 'scissors-button') {
  humanChoice = humanPlayer.humanTakeTurn('scissors');
  game.determineWinner(humanChoice);
  displayOutcome();
  game.displayUpdatedScores();
  timeout;
  }
})

// Functions
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

function displayOutcome() {
// Want the outcome of the game to be displayed
// Note: the game.determineWinner function returns [quote, humanPlayerResult, robotPlayerResult)
// (images of what was chosen would be nice as well)
  show(gameResultView);
  show(gameResultQuote);
  hide(extremeView);
  hide(traditionalView);
  hide(gameSelect);
  hide(styleHeadline);
  hide(combatantHeadline);

  console.log("It works!")
}

function displayUpdatedScores() {
// Want the updated scores for humanPlayer and robotPlayer to be displayed
// Has to happen after displayOutcome() and resetScores();
// Note: game.players[0].stats[stat] and game.players[1].stats[stat] should have this info
  // console.log(scores)
  console.log('TBD')
}

function displayHomePage() {
  show(gameSelect)
  hide(combatantHeadline);
  hide(traditionalView);
  hide(extremeView);
  hide(gameResultView);
// Want the user to be able to change the game type after button click
// Easy way to do this seems to just go back to the  "home screen"
}

function resetScores() {
// Want user to be able to reset scores after a button click
// This should only initialize game.players[0].stats[stat]
// and game.players[1].stats[stat] to zero
// Should not reset game
scores = game.resetStats()
console.log(scores)
}

function classChecker(event, className) {
var classname = event.target.classList.contains(className);
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
  show(extremeView)
  show(combatantHeadline);
  hide(styleHeadline);
  hide(traditionalView);
  hide(gameSelect);
  hide(gameResultView);
  hide(gameResultQuote);
}
