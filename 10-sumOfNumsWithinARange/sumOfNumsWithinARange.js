function sumOfNumsWithinARange(nums, start, end) {
  let rangeCount = 0;

  for(let i = 0; i < nums.length ; i++ ){
    if( nums[i] >= start && nums[i] <= end){
      rangeCount++;
    }
  }
  return rangeCount;
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;