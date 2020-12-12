function multiplication(a: number, b: number) {
  let ans = 0;
  for (let i = 0; i < b; i++) {
    ans += a;
  }
  return ans;
}

function divide(dividend: number, divisor: number): number {
  // 46 / 9 
  /* 1 */
  // 1: 1 * 9 < 46  then next
  // 2: 2 * 9 < 46 then next
  // 3: 3 * 9 < 46 then next
  // 4: 4 * 9 < 46 then next
  // 5: 5 * 9 < 46 then next
  // 6: 6 * 9 > 46 then return 6 - 1

  /* 2 */
  //1: 1 * 9 < 46 && (2 + 1) * 9 !> 46 then next
  //2: 3 * 9 < 46 && (3 + 1) * 9 !> 46 then next
  //3: 5 * 9 < 46 && (5 + 1) * 9 > 46 return 5
  let ans: number = 0;
  if (dividend !== 0) {
    if (dividend > 0) {
      if (divisor > 0) {
        while (true) {
          if (multiplication(divisor, ans) < dividend && multiplication(divisor, ans + 1) > dividend) {
            break;
          } else {
            ans++;
          }
        }
      } else {
        while (true) {
          if (multiplication(-divisor, ans) < dividend && multiplication(-divisor, ans + 1) > dividend) {
            break;
          } else {
            ans++;
          }
        }
        ans *= -1;
      }
    } else {
      if (divisor > 0) {
        while (true) {
          if (multiplication(divisor, ans) < -dividend && multiplication(divisor, ans + 1) > -dividend) {
            break;
          } else {
            ans++;
          }
        }
        ans *= -1;
      } else {
        while (true) {
          if (multiplication(divisor, ans) < dividend && multiplication(divisor, ans + 1) > dividend) {
            break;
          } else {
            ans++;
          }
        }
      }
    }
  }
  return ans
};

console.log(divide(-10, 3));
console.log(divide(10, -3));
console.log(divide(-10, -3));
console.log(divide(-10, 3));