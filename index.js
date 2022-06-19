function isPalindrome(word) {
  // Write your algorithm here
const reversedWord =reverseString(word);
return word === reversedWord;
}
function reverseString(word){
  const wordArray = word.split("");
  const reversedWordArray =wordArray.reverse();
  const reversedWord =reversedWordArray.join("");
  return reversedWord;
}


/* 
  Add your pseudocode here
//If the input string is the same after I reverse it, I should return true
  reverse the input string,
//if the reversed string is the same as the input
  return true
else
  return false
  */

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  console.log("Expecting: mom");
  console.log("=>", reverseString("mom"));

  console.log("Expecting: ih");
  console.log("=>", reverseString("hi"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");
}

module.exports = isPalindrome;
