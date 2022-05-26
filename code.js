let textArea = document.getElementById("text");
let results = document.getElementById("results");

// Your Code Here.

// Created handleKeyUp Event Listener & Function

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

// Added a textArea event listener to keyup

textArea.addEventListener("keyup", handleKeyUp)
document.getElementById("vowels").innerHTML = count;

// Developed the vowelChecker to verify vowels

let textToArray = (text) => text.split(" ")

let textToCharactersArray = (text) => text.slice()

let vowelChecker = function (charactersArray) {

    for (letter of charactersArray) {

        if(result.vowels.hasOwnProperty(letter.toLowerCase())) {
            result.vowels[letter.toLowerCase()] += 1
        }
    }
}

// Created a punctuationChecker to verify punctuation

let punctuationChecker = function(charactersArray) {
    for(mark of charactersArray)

    if(mark === "!"){result.punctuation.exclamation += 1}
    if(mark === ","){result.punctuation.comma += 1}
    if(mark === "."){result.punctuation.period += 1}
    if(mark === "?"){result.punctuation.questionMark += 1}

}

// Created a numWordChecker to verify how many words there are.

let numWordChecker = function(string) {
    charactersArray = string.split("")

    trashMark = []

    for (mark of charactersArray) {
        if(mark === "!"){trashMark.push(mark)}
        if(mark === ","){trashMark.push(mark)}
        if(mark === "."){trashMark.push(mark)}
        if(mark === "?"){trashMark.push(mark)}
    }

}

// Developed an analyser function to output the results.

let analyser = function () {

    vowelChecker(result.text)

    punctuationChecker(result.text)

    result.numCharacters = result.text.length

    console.log(result.vowels)
    console.log(result.punctuation)
    console.log(result.numCharacters)

}

// Each View details the vowels to work with.

let aView = document.querySelector("#a")
aView.innerHTML = `a: ${result.vowels.a}`

let eView = document.querySelector("#e")
eView.innerHTML = `e: ${result.vowels.e}`

let iView = document.querySelector("#i")
iView.innerHTML = `i: ${result.vowels.i}`

let oView = document.querySelector("#o")
oView.innerHTML = `o: ${result.vowels.o}`

let uView = document.querySelector("#u")
uView.innerHTML = `u: ${result.vowels.u}`

// Developed the variables with querySelectors for rendering.

let periods = document.querySelector("#periods")
let commas = document.querySelector("#commas")
let questionMarks = document.querySelector("#questionsMarks")
let exclamationPoints = document.querySelector("#exclamationPoints")

let numOfCharacters = document.querySelector("#numOfCharacters")
let numOfWords = document.querySelector("#numOfWords")
let numOfSentences = document.querySelector("#numOfSenteces")
let longestWord = document.querySelector("#longestWord")
let shortestWord = document.querySelector("#shortestWord")
let lastThreeWords = document.querySelector("#lastThreeWords")
let waldos = document.querySelector("#waldos")

// Last thing to do was invoking the textArea for testing.

textArea.addEventListener("keyup", analyser)