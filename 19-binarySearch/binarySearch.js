class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
     if (nums.length === 0) {
    return false;
  } 
    else {
      let half = Math.floor(nums.length / 2);

    if (nums[half] === target) {
      return true;
    } 
    else {
      if (nums[half] < target) {
        return this.binarySearch(nums.slice(half + 1), target);
      } 
      else if (nums[half] > target) {
        return this.binarySearch(nums.slice(0, half), target);
        }
      }
    }
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;