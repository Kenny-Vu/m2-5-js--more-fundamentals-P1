// Given the following functions, answer the questions below.

const square = (x) => {
  return x * x;
};

const decrement = (x) => {
  return x - 1;
};

const duplicateString = (x) => {
  return x.concat(x);
};

const reverseString = (str) => {
  const splitString = str.split(""); // var splitString = "hello".split("");
  const reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
  return reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
};

// Expand each of the following and get the result of the expression
// 1-1
square(decrement(square(decrement(3))));
// first decrement(3) will be called and return 2
// then square(2) will return 4
// then decrement (4) will return 3
// finally square(3) will return 9

// 1-2
decrement(decrement(square(square(3))));
// first square(3) will be called and return 9
// then square(9) will return 81
// then decrement(81) will return 80
// and finally decrement(80) will return 79

// 1-3
duplicateString(reverseString("hello"));
// first reverseString('hello') is called and will return 'olleh'
// then duplicateString('olleh') will return 'olleholleh'

// 1-4
reverseString(duplicateString(duplicateString("foo")));
// first duplicateString('foo') is called and will return 'foofoo'
// then duplicateString('foofoo') will return 'foofoofoofoo'
// finally reverseString('foofoofoofoo') will return 'oofoofoofoof'
