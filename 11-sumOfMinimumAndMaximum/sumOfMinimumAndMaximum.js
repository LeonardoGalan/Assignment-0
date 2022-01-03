function sumOfMinimumAndMaximum(nums) {
 let max = nums[0];
 let min = nums[0];
 for(let i = 0; i<nums.length;i++){
  if(nums[i]>max){
    max = nums[i];
  }
  else if(nums[i]<min){
    min = nums[i];
  }
 }
 return min+max;
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;