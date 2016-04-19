var alphabetLetters = ["no", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
"l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var stacker = [];

function stackLetters(){
  for (var i = 1; i < alphabetLetters.length; i++) {
    if(i % 5 === 0){
      stacker.push(alphabetLetters[i], " ");
      console.log(stacker.join(""));
    } else {
      stacker.push(alphabetLetters[i]);
      console.log(stacker.join(""));
    }
  }
}

stackLetters();




