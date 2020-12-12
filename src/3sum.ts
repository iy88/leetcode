function threeSum(nums: number[]): number[][] {
  let processed = nums.sort((a, b) => a - b);
  let ans: number[][] = [];
  for (let first = 0; first < processed.length - 2; first++) {
    if (first === 0 || processed[first] !== processed[first - 1]) {
      let third = processed.length - 1;
      let target = -processed[first];
      for (let second = first + 1; second < processed.length - 1; second++) {
        if (second === first + 1 || processed[second] !== processed[second - 1]) {
          while (second < third && processed[second] + processed[third] > target) {
            third--;
          }
          if (second === third) {
            break;
          }
          if (processed[first] + processed[second] === -processed[third]) {
            ans.push([processed[first], processed[second], processed[third]]);
          }
        }
      }
    }
  }
  return ans;
};