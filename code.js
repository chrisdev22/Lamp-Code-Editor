let textArea = document.getElementById("text");
let results = document.getElementById("results");
let testButton = document.getElementById("testButton");

// Your Code Here.

/* Created the Key Up Event Listener.*/

let result = {
        text: "Welcome to Kenzie Academy! My name is Scott Summers (Not a member of the X-men). We are in search of Waldo. He is an expert master in the hide and seek game. Can you help us find him if you can?",
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

// textArea.addEventListener("keyup", handleKeyUp)

    let textToArray = (text) => text.split(" ")

    let textToCharactersArray = (text) => text.slice()

    let vowelChecker = function (charactersArray) {

        for (letter of charactersArray) {

            // if (letter = "a" || "A") {results.vowels.a += 1}

            // if (letter = "e" || "E") {results.vowels.a += 1}

            // if (letter = "i" || "I") {results.vowels.a += 1}

            // if (letter = "o" || "O") {results.vowels.a += 1}

            // if (letter = "u" || "U") {results.vowels.a += 1}

            if(result.vowels.hasOwnProperty(letter.toLowerCase())) {
                result.vowels[letter.toLowerCase()] += 1
            }
        }
    }

    let punctuationChecker = function(charactersArray) {
        for(mark of charactersArray)

        if(mark === "!"){result.punctuation.exclamation += 1}
        if(mark === ","){result.punctuation.comma += 1}
        if(mark === "."){result.punctuation.period += 1}
        if(mark === "?"){result.punctuation.questionMark += 1}

    }

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

    let analyser = function () {

        vowelChecker(result.text)

        punctuationChecker(result.text)

        result.numCharacters = result.text.length

        console.log(result.vowels)
        console.log(result.punctuation)
        console.log(result.numCharacters)

    }

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

testButton.addEventListener("click", analyser)
textArea.addEventListener("keyup", analyser)



    // newData.text = text
    // newData.vowels = getVowels(text)
    // newData.punctuation = getPunct(text)
    // newData.numCharacters = text.length
    // newData.numWords = textWordsArray.length
    // newData.longestWord = getLongestWord(textWordsArray)
    // newData.shortestWord = getShortestWord(textWordsArray)
    // newData.lastThreeWords = getLastThreeWords(textWordsArray)
    // newData.waldoIndexes = getWaldoIndices(text)
    // // console.log({newData, textWordsArray})
    // displayResults(newData)
    // Zach said "Write classes and divs on HTML. It will appear."

// function getVowels(dataString) {

// }

// function getPunct(dataString) {

// }

// function getWords(dataString) {

// }

// function getLongestWord(dataString) {

// }

// function getShortestWord(dataString) {

// }

// function getLastThreeWords(wordArray) {
//     return wordArray.slice(-3) 
// }

// function getWaldoIndices(dataString) {

// }

// function displayResults(dataObject) {

// }

// function diaplayObj(obj) {

// }