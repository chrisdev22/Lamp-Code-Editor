let textArea = document.getElementById("text");
let results = document.getElementById("results");

// Your Code Here.

// Initial Object to store information

let result = {
    text: "",
    vowels: {
      a: 0,
      e: 0,
      i: 0,
      o: 0,
      u: 0
    },
    punctuation: {
      period: 0,
      comma: 0,
      exclamation: 0,
      questionMark: 0
    },
    numCharacters: 0,
    numWords: 0,
    longestWord: "",
    shortestWord: "",
    lastThreeWords: [],
    waldoIndexes: [],
  }