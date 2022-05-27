let textArea = document.getElementById("text");
let results = document.getElementById("results");

// Your Code Here.

// Initial Object to store information

// All credits go to Jon Taylor who made the DataTypes walkthrough video

function handleKeyUp(event) {

    let text = textArea.value
    let wordsArray = getWordsArray(text)
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
    result.text = text
    result.numCharacters = text.length
    result.vowels = getVowelsObject(text)
    result.punctuation = getPunctuationObject(text)
    result.numWords = wordsArray.length
    result.longestWord = getLongestWord(wordsArray)
    result.shortestWord = getShortestWord(wordsArray)
    result.lastThreeWords = wordsArray.slice(-3)
    // console.log(wordsArray)
    console.log(result)
}

// Inside a function we created a Switch case.
// *To make this run the project build.
// result.variabl must be invoked below the handleKeyUp function.*
// This is where I got the a-ha moment.
// I thought that the for loop was enough.

function getVowelsObject(dataString) {
    dataString = dataString.toLowerCase()
    let vowelCounts = {}
    for (let i = 0; i < dataString.length; i += 1) {
        let currentChar = dataString[i]
        console.log(currentChar)
        switch (currentChar) {
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
                if (vowelCounts[currentChar]) {
                    vowelCounts[currentChar] += 1
                } else {
                    vowelCounts[currentChar] = 1
                }
                break;
        }
    }
    return vowelCounts
}

function getPunctuationObject(dataString) {
    dataString = dataString.toLowerCase()
    let punctuationCounts = {
        period: 0,
        comma: 0,
        exclamation: 0,
        questionMark: 0
    }
    for (let i = 0; i < dataString.length; i += 1) {
        let currentChar = dataString[i]
        switch (currentChar) {
            case ".":
                punctuationCounts["period"] += 1
                break;
            case ",":
                punctuationCounts["comma"] += 1
                break;
            case "!":
                punctuationCounts["exclamation"] += 1
                break;
            case "?":
                punctuationCounts["questionMark"] += 1
                break;
        }
    }
    return punctuationCounts
}

function getWordsArray(dataString) {
    let wordsArray = dataString.split(" ")
    let characters = "abcdefghijklmnopqrstuvxwyz' ABCDEFGHIJKLMNOPQRSTUVXWYZ"
    let filteredArray = []
    for (let word of wordsArray) {
        if (word !== "") {
            let charsArray = word.split("")
            let filteredChars = []
            for (let i=0; i < charsArray.length; i += 1) {
                let currentChar = charsArray[i]
                if (characters.includes(currentChar) == true) {
                    filteredChars.push(currentChar)
                }
            }
            filteredArray.push(filteredChars.join(""))
        }
    }
    return filteredArray
}

function getLongestWord(words) {
    let sortedWords = words.sort( (wordA, wordB) => wordB.length - wordA.length )
    return sortedWords[0]
}

function getShortestWord(words) {
    let sortedWords = words.sort( (wordA, wordB) => wordA.length - wordB.length )
    return sortedWords[0]
}

textArea.addEventListener("keyup", handleKeyUp)