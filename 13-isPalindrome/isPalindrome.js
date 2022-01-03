function isPalindrome(word) {
  let reverseWord = word.split("").reverse().join("");

  return word === reverseWord;
}

// Do not edit this line;
module.exports = isPalindrome;