/**
 * Let's do some coding warm up to get you started with JS!
 *
 */

/**
 * Task 1: Create a function that takes an integer as input and returns the
 * letter grade (as a string) corresponding to it. Return "INVALID" if the
 * integer is outside the range [0, 100].
 *
 * Letter grade:
 * A = 90 -> 100
 * B = 80 -> 89
 * C = 70 -> 79
 * D = 60 -> 69
 * F = anything < 60
 */
function toLetterGrade(numGrade) {
  if (numGrade < 0 || numGrade > 100) {
    return "INVALID";
  } else if (numGrade >= 90) {
    return "A";
  } else if (numGrade >= 80) {
    return "B";
  } else if (numGrade >= 70) {
    return "C";
  } else if (numGrade >= 60) {
    return "D";
  } else if (numGrade < 60) {
    return "F";
  }
}

/**
 * Task 2: Create a function that takes in an array of integers and returns a
 * new array containing only even elements from the original array. The
 * ordering of the remaining elements should be the same as the original array.
 *
 * Example: [9, 3, 4, 1, 2, 0] --> [4, 2, 0]
 */
function getEvenElements(array) {
  var numEvens = 0; // counter for number of evens
  for (var i = 0; i < array.length; i++) { // find number of evens
    if (array[i] % 2 == 0) {
      numEvens++;
    }
  }
  
  var evensArray = new Array(numEvens); // make new array
  var index = 0; // keep track of index
  for (var i = 0; i < array.length; i++) { // add the even elements to new array
    if (array[i] % 2 == 0) {
      evensArray[index] = array[i];
      index++;
    }
  }
  return evensArray; // return new array containing only even elements from the original array
}

/**
 * Task 3: Create a function that takes in a sentence and returns the LENGTH
 * of the longest word in that sentence. No punctuation will appear in the
 * sentence.
 *
 * Hint: The .split() method might be useful here
 *
 * Example: "I love Bits of Good" --> 4
 */
function findLongestWord(string) {
  var wordsArray = string.split(' '); // split sentence into an array of strings
  var longestLength = 0; // keep track of the length of each word to find the longest one
  for (var i = 0; i < wordsArray.length; i++) { // go through each element in the string array
    if (wordsArray[i].length > longestLength) { // find the longest word in the string array
      longestLength = wordsArray[i].length; // update the length of the longest word found
    }
  }
  return longestLength; // return the length of the longest word
}

/**
 * Task 4: Create a function that takes in 2 objects and return an object that 
 * is the combination of the 2
 *
 * Example:
    {
        name: "Casey",
        age: 10
    }
    {
        breed: "Pomeranian",
        friendly: false
    }
    -->
    {
        name: "Casey",
        age: 10,
        breed: "Pomeranian",
        friendly: false
    } 
 */
function combineObjects(object1, object2) {
  var newObject = {}; // new object to combine properties
  for (var key in object1) { // check item in object1
    if (object1.hasOwnProperty(key)) {
      newObject[key] = object1[key]; // add item to combination
    }
  }
  for (var key in object) { // check item
    if (object2.hasOwnProperty(key)) {
      newObject[key] = object2[key]; // add item to combination
    }
  }
  return newObject; // return combination 
}

/**
 *  Task 5: Create a function that takes an array as an argument and returns
 *  the reverse array.
 *
 *  DO NOT USE THE .reverse() METHOD!!
 *
 *  Example: [1, 2, 3] -> [3, 2, 1]
 */
function reverseArr(array) {
  var reverseArray = new Array(array.length); // create new array
  for (var i = 0; i < array.length; i++) { // iterate through old array
    reverseArray[i] = array[(array.length - 1) - i]; // assign elements in reverse order
  }
  return reverseArray; // return reversed array
}

}

// DO NOT EDIT BELOW THIS LINE -- the code is for testing purposes only!
// To test your code, run `node warmUp.js` in your terminal

import {
  testToLetterGrade,
  testGetEvenElements,
  testFindLongestWord,
  testCombineObjects,
  testReverseArr,
} from "./warmUpTests.js";

console.log("TEST RESULTS:");
testToLetterGrade(toLetterGrade);
testGetEvenElements(getEvenElements);
testFindLongestWord(findLongestWord);
testCombineObjects(combineObjects);
testReverseArr(reverseArr);
