function twoSum(nums: number[], target: number): number[] {
  let res: number[] = [];
  let flag = false;
  for (let i: number = 0; i < nums.length - 1; i++) {
    for (let j: number = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        res.push(i, j);
        flag = true;
        break;
      }
    }
    if (flag) {
      break;
    }
  }
  return res
};