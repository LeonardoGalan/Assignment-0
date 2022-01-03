function countOfAllBooleansAndStrings(arr) {
 let totalBoolString = 0;
 for(let i = 0; i< arr.length; i++){
  if(typeof arr[i] === "boolean" || typeof arr[i] === 'string'){
    totalBoolString++;
  }
 }
 return totalBoolString;
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;