const INT_MIN: number = -1 * Math.pow(2, 31);
const INT_MAX: number = Math.pow(2, 31) - 1;
function myAtoi(s: string): number {
  let ret: number = !isNaN(parseInt(s)) ? parseInt(s) : 0;
  return ret >= INT_MIN ? ret <= INT_MAX ? ret : INT_MAX : INT_MIN;
};