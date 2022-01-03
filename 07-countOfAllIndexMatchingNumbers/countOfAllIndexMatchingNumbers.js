function countOfAllIndexMatchingNumbers(nums) {
let matchCount = 0;

for( let i = 0; i<nums.length; i++){
  if(nums[i] == i){
    matchCount++;
  }
}
return matchCount;

}

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;