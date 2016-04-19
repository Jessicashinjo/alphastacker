var alphabetLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
"l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var stacker = [];

function stackLetters(){
  for (var i = 0; i < alphabetLetters.length; i++) {
    stacker.push(alphabetLetters[i]);
    console.log("alphabet stack", stacker);
  }
}

stackLetters();

