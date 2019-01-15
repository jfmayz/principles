var database = ['alabama', 'alaska', 'arizona', 'arkansas', 'california', 'colorado', 'connecticut', 'delaware', 'florida', 'georgia', 'hawaii', 'idaho', 'illinois', 'indiana', 'iowa', 'kansas', 'kentucky', 'louisiana', 'maine', 'maryland', 'massachusetts', 'michigan', 'minnesota', 'mississippi',
  'missouri', 'montana', 'nebraska', 'nevada', 'new hampshire', 'new jersey', 'new mexico', 'new york', 'north carolina', 'north dakota', 'ohio', 'oklahoma', 'oregon', 'pennsylvania', 'rhode island', 'south carolina', 'south dakota', 'tennessee', 'texas', 'utah', 'vermont', 'virginia', 'washington',
  'west virginia', 'wisconsin', 'wyoming'
];
var score = 0
var lives = 10
var maxscore = database.length
var answer

function check() {
  answer= document.getElementById("answer").value.toLowerCase();
  console.log(answer);

  for (i = 0; i < database.length; i++) {
    if (database.length == 0) {
      console.log("VICTORY");
      break;
    } else if (database[i] == answer) {
      correct();
    } else {
      console.log("incorrect :(");
    }
  }
}

function correct() {
  console.log("correct!");
  database.splice(i, 1);
  score = score + 1;
  document.getElementById("scoreText").innerHTML = score + "/" + maxscore;
  document.getElementById("answer").value = ""
  var ul = document.getElementById("answerlist");
  var newans = document.createElement("li");
  newans.appendChild(document.createTextNode(answer));
  ul.appendChild(newans);
}
var enterans = document.getElementById("answer");
enterans.onkeyup = function(e) {
  if (e.keyCode == 13) {
    check();
  }
}
