let textArea = document.getElementById("text");
let results = document.getElementById("results");

// Your Code Here.

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
            "Periods": 0,
            "Commas": 0,
            "Exclamation Points": 0,
            "Questions Marks": 0
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
    result.waldoIndexes = getWaldoIndices(text)
    // console.log(result)
    // console.log(wordsArray)
    renderData(result)
}

function getVowelsObject(dataString) {
    dataString = dataString.toLowerCase()
    let vowelCounts = {}
    for (let i = 0; i < dataString.length; i += 1) {
        let currentChar = dataString[i]
        // console.log(currentChar)
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
            "Periods": 0,
            "Commas": 0,
            "Exclamation Points": 0,
            "Questions Marks": 0
    }
    for (let i = 0; i < dataString.length; i += 1) {
        let currentChar = dataString[i]
        switch (currentChar) {
            case ".":
                punctuationCounts["Periods"] += 1
                break;
            case ",":
                punctuationCounts["Commas"] += 1
                break;
            case "!":
                punctuationCounts["Exclamation Points"] += 1
                break;
            case "?":
                punctuationCounts["Questions Marks"] += 1
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
                if (characters.includes(currentChar) === true) {
                    filteredChars.push(currentChar)
                }
            }
            filteredArray.push(filteredChars.join(""))
        }
    }
    return filteredArray
}

function getLongestWord(words) {
    let sortedWords = [...words].sort( (wordA, wordB) => wordB.length - wordA.length )
    return sortedWords[0]
}

function getShortestWord(words) {
    let sortedWords = [...words].sort( (wordA, wordB) => wordA.length - wordB.length )
    return sortedWords[0]
}

function getWaldoIndices(dataString) {
    let indices = []
    let searchString = "waldo"
    let lowerCaseString = dataString.toLowerCase()
    let searchIndex = 0
    let i
    while ((i = lowerCaseString.indexOf(searchString, searchIndex)) > -1) {
        indices.push(i)
        searchIndex = i + searchString.length
    }
    return indices
}

// Bug Error: container.classList.add("container") while reading "vowels".
// Solution: renderData(result). It fixes the bug easily.
// All Credits go to Jon Taylor who found the solution.

function renderData (dataObject) {
    results.replaceChildren()

    let container = document.createElement("div")
    container.classList.add("container")

    let title = document.createElement("h2")
    title.append("Text Analysis")
    container.append(title)
    
    let columnContainer = document.createElement("div")
    columnContainer.classList.add("columnContainer")
    container.append(columnContainer)

    let leftColumn = document.createElement("div")
    leftColumn.classList.add("column")
    columnContainer.append(leftColumn)

    let rightColumn = document.createElement("div")
    rightColumn.classList.add("column")
    columnContainer.append(rightColumn)
    
    let vowels = document.createElement("div")
    vowels.classList.add("column")
    leftColumn.append(vowels)

    let vowelTitle = document.createElement("h3")
    vowelTitle.append("Vowel Counts")
    vowels.append(vowelTitle)
    
    let punctuation = document.createElement("div")
    punctuation.classList.add("column")
    leftColumn.append(punctuation)

    let punctTitle = document.createElement("h3")
    punctTitle.append("Punctuation Counts")
    punctuation.append(punctTitle)

    let numOfChars = document.createElement("h3")
    numOfChars.append(`Number of Characters: ${dataObject.numCharacters}`)
    rightColumn.append(numOfChars)

    let numOfWords = document.createElement("h3")
    numOfWords.append(`Number of Words: ${dataObject.numWords}`)
    rightColumn.append(numOfWords)

    let longest = document.createElement("h3")
    longest.append(`Longest Word: ${dataObject.longestWord}`)
    rightColumn.append(longest)
    
    let shortest = document.createElement("h3")
    shortest.append(`Shortest Word: ${dataObject.shortestWord}`)
    rightColumn.append(shortest)

    let lastThree = document.createElement("h3")
    lastThree.append(`Last Three Words: ${dataObject.lastThreeWords}`)
    rightColumn.append(lastThree)

    let waldos = document.createElement("h3")
    waldos.append(`Waldo Indexes: ${dataObject.waldoIndexes}`)
    rightColumn.append(waldos)

    vowels.append(displayObject(dataObject.vowels))

    punctuation.append(displayObject(dataObject.punctuation))
    
    results.append(container)
}

// Bug error: Typo "lil". VSCode IntelliSense adding append.apply automatically.
// Solution: Fixed and erased "lil" to create the unordered list with only "li".
// VSCode IntelliSense tends to add append.apply. Don't add apply erase it. "Only append".

function displayObject (obj) {
    let list = document.createElement("ul")
    for(let property in obj) {
        let listItem = document.createElement("li")
        listItem.append(`${property}: ${obj[property]}`)
        list.append(listItem)
    }
    return list 
}



textArea.addEventListener("keyup", handleKeyUp)



// Initial Object to store information

// All credits go to Jon Taylor who made the DataTypes walkthrough video

// Inside a function we created a Switch case.
// *To make this run the project build.
// result.variabl must be invoked below the handleKeyUp function.*
// This is where I got the a-ha moment.
// I thought that the for loop was enough.

// console.log(wordsArray)


// To find Waldo Indices we manipulated the DOM Objects.
// The While Loop helps us index our search for Waldo.