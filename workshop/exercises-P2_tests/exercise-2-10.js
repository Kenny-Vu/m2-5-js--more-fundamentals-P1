// Exercise 2-10
// -------------

// Make this function return the input string, capitalized.
// f("hello world"); // Hello World
// f("ALL YOUR BASE ARE BELONG"); // All Your Base Are Belong

// HINT:
//  - Write a function that capitalizes a single word.
//  - Split the input sentence into an array of words
//  - Iterate over each word, calling your "capitalize word" function
//  - Join the results into a string

const capWord = function (str) {
  let cap = str[0].toUpperCase();
  let sub = str.substring(1).toLowerCase();
  return cap + sub;
};

function makeIntoTitle(sentence) {
  // Your code here
  sentenceArr = sentence.split(" ");
  let newSentence = [];
  sentenceArr.forEach((word) => {
    let newWord = capWord(word);
    newSentence.push(newWord);
  });
  let title = newSentence.join(" ");
  return title;
}

// Add 6 total (5 more)
expect(
  makeIntoTitle("the longest road is a great song"),
  "The Longest Road Is A Great Song"
);
expect(makeIntoTitle("the greatest showman"), "The Greatest Showman");
expect(makeIntoTitle("THE LAST AIRBENDER"), "The Last Airbender");
expect(makeIntoTitle("her"), "Her");
expect(makeIntoTitle("game of THRONES"), "Game Of Thrones");
expect(makeIntoTitle("the alchemist"), "The Alchemist");

/**
 * -------------------------------------------------------------------
 * ⚠️ No changes necessary below. ⚠️
 * -------------------------------------------------------------------
 */
function expect(result, value) {
  if (result === value) {
    console.log("✅ Test succeeded");
  } else {
    console.log(`⛔️ Expected “${result}” to equal “${value}”`);
  }
}
