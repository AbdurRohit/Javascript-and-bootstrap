//1.a
const txt1 = "i enjoy coding and writing code is a lot of fun";
const wordArray = [];
let currentWord = "";

for (let i = 0; i < txt1.length; i++) {
  const char = txt1[i];
  if (char !== " ") {
    currentWord += char;
  } else if (currentWord) {
    wordArray.push(currentWord);
    currentWord = "";
  }
}

if (currentWord) {
  wordArray.push(currentWord);
}

console.log(wordArray);


// //1.b
const upperCaseArray = wordArray.map(toUpperCase);

function toUpperCase(word) {
    return word.toUpperCase();
  }
console.log(upperCaseArray);

//1.c
const firstCharacters = wordArray.reduce(getFirstCharacter, "");
function getFirstCharacter(result, word) {
    return result + word[0];
  }
console.log(firstCharacters);

//1.d
const filteredArray = wordArray.filter(containsAorE);

function containsAorE(word) {
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (char === "a" || char === "e") {
        return true;
      }
    }
    return false;
  }
console.log(filteredArray);

//1.e
  
const countAE = wordArray.reduce(countWordsWithAorE, 0);

function countWordsWithAorE(count, word) {
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (char === "a" || char === "e") {
        return count + 1;
      }
    }
    return count;
  }
console.log(countAE);

//1.f

const jsonObjectArray = wordArray.map(createJSONObject);

function createJSONObject(word) {
    let vowelCount = 0;
    for (let i = 0; i < word.length; i++) {
      const char = word[i].toLowerCase();
      if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
        vowelCount++;
      }
    }
    return {
      myWord: word,
      wordLength: word.length,
      vowelCount: vowelCount
    };
  }
console.log(jsonObjectArray);


  
  