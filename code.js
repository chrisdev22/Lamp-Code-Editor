let textArea = document.getElementById("text");
let results = document.getElementById("results");

// Your Code Here.

/* Created the Key Up Event Listener.*/

function handleKeyUp(event) {
    let text = textArea.value.trim()
    let textWordsArray = getWords(text)
    let newData = {
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
    newData.text = text
    newData.vowels = getVowels(text)
    newData.punctuation = getPunct(text)
    newData.numCharacters = text.length
    newData.longestWord = getLongestWord(textWordsArray)
    newData.shortestWord = getShortestWord(textWordsArray)
    newData.lastThreeWords = getLastThreeWords(textWordsArray)
    newData.waldoIndexes = getWaldoIndices(text)

    displayResults(newData)

}