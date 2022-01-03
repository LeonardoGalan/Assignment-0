function frequencyCounter(word) {
   let freqObj = {};

  for(let i = 0; i < word.length; i++) {
    let letter = word.charAt(i);
    if (freqObj[letter]) {      
      freqObj[letter]++;
    }
    else {
      freqObj[letter] =1;
    }
  }

  return freqObj;
}


// Do not edit this line;
module.exports = frequencyCounter;