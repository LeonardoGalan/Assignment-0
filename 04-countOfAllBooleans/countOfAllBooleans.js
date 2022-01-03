function countOfAllBooleans(arr) {
  let totalBool = 0;
  for (let i = 0; i<arr.length; i++){
    if(typeof arr[i] === "boolean"){
      totalBool++;
    }
  } 
  return totalBool;
 }

// Do not edit this line;
module.exports = countOfAllBooleans;