// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

describe('shiftShuffle', () => {
  it('removes the first item from the array and shuffles the remaining content', () => {

    const colors1 = ["purple", "blue", "green", "yellow", "pink"]
    // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]

    const colors2 = [
    "chartreuse",
    "indigo",
    "periwinkle",
    "ochre",
    "aquamarine",
    "saffron"
    ]
    // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

    expect(shiftShuffle(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
    expect(shiftShuffle(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
  })
})


// b) Create the function that makes the test pass.

//Note: Special thanks to the Fisher-Yates algo. I have tried to do this other
//ways and it didn't work

//create a function named shiftShuffle that takes an array as an parameter
const shiftShuffle = (array) =>{
  //use .shift() method to remove first element of the array
  array.shift()
  //create a for loop: variable 'i' holds the value of the arrays length
  //minus 1 (because we want only the indexes and no more)
  //while 'i' is greater than 0 - increment 'i' negatively increment 'i'
  for(let i = array.length - 1; i > 0; i--){
    //use Math.floor(Math.random()) to create a new varibale 'random' that holds a random value
    //value = (any index in the array)
    let random = Math.floor(Math.random() * (i + 1))
    //create a variable 'tempI' that holds the value of the current index being iterated over
    let tempI = array[i]
    //the current index being iterated over will now hold the value of a random item in the array
    array[i] = array[random]
    //the random value will now be held in 'tempI'
    array[random] = tempI
    //this process will coninue until all items have been shuffled
    //Note: this process works backwards starting with the last index
  }
  //return the shifted and shuffled array
  return array
}
//Example Input: ["purple", "blue", "green", "yellow", "pink"]
//Example Output: ["pink", "blue", "green", "yellow"]

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

describe('voteCount', () => {
  it('takes in an object that contains up votes and down votes and returns the end tally', () => {

    const votes1 = { upVotes: 13, downVotes: 2 }
    // Expected output: 11
    const votes2 = { upVotes: 2, downVotes: 33 }
    // Expected output: -31

    expect(voteCount(votes1)).toEqual(11)
    expect(voteCount(votes2)).toEqual(-31)
  })
})


// b) Create the function that makes the test pass.

//create a function named voteCount that takes an oobject as a parameter
const voteCount = (object) => {
  //use dot notation to access the keys values (which are numbers) and subtract them
  //return the number
  return object.upVotes - object.downVotes
}

//Example Input: {upVotes: 2, downVotes: 100}
//Example Output: -98

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.
describe('noDupes', () => {
  it('takes in two arrays as arguments and returns one array with no duplicate values', () => {

    const dataArray1 = ["array", "object", "number", "string", "Boolean"]
    const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
    // Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

    expect(noDupes(dataArray1, dataArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
  })
})

// b) Create the function that makes the test pass.

//create a function named 'noDupes' that takes 2 arrays as parameters
const noDupes = (array1, array2) => {
  //use the .concat() method to combine the two arrays
  //use the .filter() method to isolate the value, index, and array
  //while iterating through the array, filter out values that already exist
  //return that new array
  return array1.concat(array2).filter((value, index, array) => array.indexOf(value) === index)
}

//Note: the following is for STRETCH
describe('noDupes2', () => {
  it('takes in two arrays as arguments and returns one array with no duplicate values', () => {

    const dataArray1 = ["array", "object", "number", "string", "Boolean"]
    const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
    // Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

    expect(noDupes2(dataArray1, dataArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
  })
})

const noDupes2 = (array, array1) => {
  //pretty much the same as before except instead of
  //using concat to combine the arrays I used the 
  //spread operator [...]
  return [...array, ...array1].filter((value, index, array) => array.indexOf(value) === index)
}