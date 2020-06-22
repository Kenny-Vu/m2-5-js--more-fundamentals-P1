// Exercise 2-7
// ------------

// Step 1
// - The function input is an array.
// - The first element of the array is a string. The second is a number.
// - Make this function return the string repeated as many times as specified by the second element of the array.
// - If a negative number or zero is specified, return an empty string. If any invalid parameters are supplied return undefined.

// f(["foo", 3]) // "foofoofoo"
// f(["fo", 3]) // "fofofo"
// f(["foo", -1]) // ""

function repeat(arr) {
  // Your code here
  if (typeof arr[0] !== "string" || typeof arr[1] !== "number") {
    return undefined;
  } else if (arr[1] < 0) {
    return "";
  } else {
    let str = arr[0];
    return str.repeat(arr[1]);
  }
}

// We need 7 test cases.
expect(repeat(["banana", 5]), "bananabananabananabananabanana");
expect(repeat(["banana", -1]), "");
expect(repeat(["banana", 0]), "");
expect(repeat([45, 5]), undefined);
expect(repeat(["apple", "bacon"]), undefined);
expect(repeat([["lemur", "alpaca"], 2]), undefined);
expect(repeat([{ first: "bob", last: "ross" }, "bacon"]), undefined);

// Don't forget to test all of the question parameters

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
