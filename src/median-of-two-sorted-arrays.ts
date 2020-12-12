function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  let arr: number[] = [...nums1, ...nums2].sort((a, b) => {
    if (a < 0 && b > 0) {
      return -1;
    } else if (a > 0 && b < 0) {
      return 1;
    } else if (a < 0 && b < 0) {
      return (Math.abs(a) - Math.abs(b)) * -1;
    } else {
      return a - b
    }
  });
  if (arr.length % 2 === 0) {
    return (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2
  } else {
    return arr[Math.floor(arr.length / 2)];
  }
};