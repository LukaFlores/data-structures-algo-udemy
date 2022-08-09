// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

//MY SOLUTION
function anagrams(stringA, stringB) {
  let strA = stringA.replace(/[^\w]/g, "").toLowerCase().split("").sort().join();
  let strB = stringB.replace(/[^\w]/g, "").toLowerCase().split("").sort().join();
  // Tip Create Helper function for cleanup string
  //
  //  let objA = {};
  //  let objB = {};
  //
  //  for (let char of strA) {
  //    objA[char] = objA[char] + 1 || 1;
  //  }
  //
  //  for (let char of strB) {
  //    objB[char] = objB[char] + 1 || 1;
  //  }
  // return JSON.stringify(objA) === JSON.stringify(objB);
  return strA === strB;
}

// Alt Answer
function anagrams2(stringA, stringB) {
  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);

  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }

  for (let char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) {
      return false;
    }
  }

  return true;
}

function buildCharMap(str) {
  const charMap = {};

  for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
}

module.exports = anagrams;
