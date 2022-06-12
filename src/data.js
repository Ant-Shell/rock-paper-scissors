// Assets
var player1Avatars = [
  './assets/Human1.png',
  './assets/Human2.png',
  './assets/Human3.png',
  './assets/Human4.png',
  './assets/Human5.png',
  './assets/Human6.png',
  './assets/Human7.png',
  './assets/Human8.png',
];

// Assets
var player2Avatars = [
  './assets/Robot1.png',
  './assets/Robot2.png',
  './assets/Robot3.png',
  './assets/Robot4.png',
  './assets/Robot5.png',
  './assets/Robot6.png',
];

var opmAvatars = ['./assets/Saitama.png',];

var gokuAvatars = ['./assets/Goku.png',];

var alienAvatars = ['./assets/Alien.png',];

var mosquitoAvatars = ['./assets/Mosquito.png',];

// Traditional game config object
var configTraditional = {
  "rock": ["scissors"],
  "scissors": ["paper"],
  "paper": ["rock"],
};

// Extreme game config array
// Merge with configTraditional object(?)
// https://webinuse.com/how-to-merge-objects-in-javascript/
var configExtreme = {
  "rock": ["scissors"],
  "scissors": ["paper"],
  "paper": ["rock"],
  "onepunchman": ["rock", "paper", "scissors", "goku", "alien"],
  "goku": ["paper", "scissors", "alien", "mosquito"],
  "alien": ["rock", "paper", "scissors", "mosquito"],
  "mosquito": ["onepunchman"],
};


// Strings
var gameWinQuotes = [
  "You Win!",
  "Nice Fight!",
  "Good Fight!",
  "Well Done!",
  "Very Good!",
  "You're Awesome!",
  "Noice!",
  "Human Wins!",
  "Flawless Victory",
  "Woo Hoo!",
  "It's Morbin Time!",
];

// Strings
var gameLossQuotes = [
  "Outsmarted.",
  "Better luck next time.",
  "Outplayed.",
  "Skynet Wins.",
  "Fatality.",
  "You Lose.",
  "Oof.",
  "Rekt.",
  "Doh!",
  "Not This Time.",
  "You got Morbed On",
];

// Strings
var gameDrawQuotes = [
  "Draw Game!",
  "It's a Draw!",
  "Great Minds Think Alike",
  "What are the Odds?",
  "You?? Me???",
  "It's like looking in a Mirror ...",
  "You again???"
];

var opmWinQuotes = [
  "One PUUUUUUUUNCHED!!!"
];

var gokuWinQuotes = [
  "KamehameHAAAAAAAA!"
];


var alienWinQuotes = [
  "I am the mighty Frieza!"
];

var mosquitoWinQuotes = [
  "BzzZzZZzzzZZZzzzZ."
];
