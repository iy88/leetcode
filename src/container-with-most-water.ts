function maxArea(height: number[]): number {
  let ans:number = 0;
  for(let i = 0; i < height.length-1; i++){
    for(let j = i + 1; j < height.length; j++){
      ans = Math.max(ans,(j-i)*Math.min(height[i],height[j]));
    }
  }
  return ans;
};