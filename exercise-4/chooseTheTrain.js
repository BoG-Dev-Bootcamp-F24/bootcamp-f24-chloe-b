import getRealTimeRailCoordinates from "./getRail.js";

/**
 * You are given an array of all Marta rail arrivals at the time you run this
 * function (it's possible that there are no rails currently running -- in
 * those cases, the function returns a preset array of objects).
 *
 * You don't need to know how this works as you will learn all about it in the
 * next lecture. For now, please know that this is the array from which you
 * will process the data to fit your needs
 */
const railArray = await getRealTimeRailCoordinates();

/**
 * Task 1: What are the keys in each element in railArray?
 *
 * We want to roughly know what we are working with, so we need to know all
 * the keys in the FIRST element of railArray (there's no need to check the
 * keys of other elements, as they'll all be the same)
 *
 * Create a function that takes railArray as an argument and return the keys
 * of the first element of railArray in the form of an array
 *
 * DO NOT USE the Object.keys() METHOD!
 * Example:
 * {
 *     name: "Casey",
 *     age: 10,
 *     breed: "Pomeranian",
 *     friendly: false
 * }
 * -->
 * ["name", "age", "breed", "friendly"]
 *
 *
 * DO NOT MODIFY railArray! You'll need it for later
 */
function getKeysToArr(arrivals) {
  if (arrivals.length == 0) {
    return []; // return empty array if 'arrivals' is empty
  }
  const keysArray = [];
  const firstElement = arrivals[0];

  // iterate over keys in first object
  for (const key in firstElement) {
    if (firstElement.hasOwnProperty(key)) {
      keysArray.push(key); // add to array of keys
    }
  }
  return keysArray; // return array of keys
}

/**
 * Task 2: We want to know which train is coming in 1 mintue!
 *
 * Create a function that takes railArray as an argument
 * and return an array of arrivals that is coming in 1 minute
 *
 * Please use forEach for this task!
 *
 * Hint: you would want to look at the field WAITING_TIME: '1 min'
 *
 * DO NOT MODIFY railArray! You'll need it for later
 */
function getTrainComingIn1Minute(arrivals) {
  const trainsArriving = []; // create array of arrivals
  for (var i = 0; i < arrivals.length; i++) { // iterate through trains in arrivals
    const train = arrivals[i];
    if (train.WAITING_TIME == '1 min') { // find train that has arrival time of 1 min
      trainsArriving.push(train);
    }
  }
  return trainsArriving; // return array of arrivals
}

/**
 * Task 3: Marta wants to change all Blue Rail Lines to be Pink Rail Lines
 *
 * Create a function that takes railArray as an argument, filter all elements
 * in railArray that involves Blue Line, DEEP copy the filtered array into a
 * new array (meaning all elements in filtered array are deep copied), map the
 * Line in the copy array to be Pink, and return the resulting array
 *
 * Example:
 * {
 *      ...
 *      LINE: 'BLUE',
 *      ...
 * }
 *
 * will become
 *
 * {
 *      ...
 *      LINE: 'PINK',
 *      ...
 * }
 *
 * Hint: filter, map, and spread operator might be useful here
 *
 * railArray should not be modified after running this function!
 *
 */
function updateLineColor(arrivals) {
  const pinkTrains = []; // create array to hold trains with updated line color
  for (var i = 0; i < arrivals.length; i++) {
    const train = arrivals[i];
    if (train.LINE == "BLUE") {
      const updatedTrain = {
        ...train,
        LINE: "PINK"
      };
    pinkTrains.push(updatedTrain);
    }
  }
  return pinkTrains;
}

console.log(getKeysToArr(railArray));
console.log(getTrainComingIn1Minute(railArray));
console.log(updateLineColor(railArray));
