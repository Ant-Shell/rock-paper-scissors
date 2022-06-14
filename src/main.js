// QuerySelectors
var sidebarLeft = document.getElementById('sideBarLeft');
var gameSelect = document.getElementById('gameSelect');

var gameoptions = document.getElementById('gameOptions');
var sidebarRight = document.getElementById('sidebarRight');
var changeGameButton = document.getElementById('changeGameButton');
var resetScoresButton = document.getElementById('resetScoresButton');
var traditionalModeButton = document.querySelector('.game-mode-button');
var extremeModeButton = document.querySelector('.game-mode-button2');
// var presentGame = newGame();
// Event Listeners
gameSelect.addEventListener('click', function(event)) {
  var type = gameSelect(event)
  currentGame.select()
  currentGame.setup()
})


changeGameButton.addEventListener('click', displayHomePage)


// Functions
function newGame(type) {
var humanPlayer = new Player('Human');
var robotPlayer = new Player('Robot');
var newGame = new Game(humanPlayer, robotPlayer, type)
return newGame;
}

function avatarDisplayHuman() {
  // Want to display all avatars that are in player1Avatars
  // Unhide a box that shows the images (need sizing)
  // Upon click of image, kick off avatarSelect function() ?
}

function avatarDisplayRobot() {
  // Want to display all avatars that are in and player2Avatars
  // Unhide a box that shows the images (need sizing)
  // Upon click of image, return image and kick off avatarSelect function() ?
  // Place this function before avatarSelect() in event handler?
}

function avatarSelect(imageFile) {
// Want to allow for user to choose avatar for humanPlayer and robotPlayer
// This depends on which button is pressed
// Also depends on if image file contains 'Human' or 'Robot'?
// Can the value of an argument be assigned to a variable?

}

function displayUpdatedAvatar() {
// Want to display the new avatar that was selected by the user
// Need to inject new image into the html or add to game.players[0].avatar / game.players[0].avatar ?
// If the later, can I just inject game.players[0].avatar / game.players[0].avatar
// via interpolation (innerText / innerHTML)?
// https://frontend.turing.edu/lessons/module-1/js-intro-to-the-dom.html
}

function gameSelect(event) {
// Want user to be able to select a game type upon button click
// If one button is selected, return 'traditional'
// If another is clicked, return 'extreme'
  if (event.target.className === traditionalModeButton) {
    return 'traditional';
  } else if (event.target.className === extremeModeButton)  {
    return 'extreme';
  }
}

function gameSetup() {
// Want game to be set up based on the result of gameSelect()
}

function turnsTaken() {
// Want both humanPlayer and robotPlayer to take their turns at the same time

}

function displayOutcome() {
// Want the outcome of the game to be displayed
// Note: the game.determineWinner function returns [quote, humanPlayerResult, robotPlayerResult)
// (images of what was chosen would be nice as well)
}

function displayUpdatedScores() {
// Want the updated scores for humanPlayer and robotPlayer to be displayed
// Has to happen after displayOutcome()
// Note: game.players[0].stats[stat] and game.players[1].stats[stat] should have this info
}

function displayHomePage() {
// Want the user to be able to change the game type after button click
// Easy way to do this seems to just go back to the  "home screen"
}

function resetScores() {
// Want user to be able to reset scores after a button click
// This should only initialize game.players[0].stats[stat]
// and game.players[1].stats[stat] to zero
// Should not reset game
}
