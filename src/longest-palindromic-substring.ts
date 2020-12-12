function longestPalindrome(s: string): string {
  if (s.length == 1) {
    return s;
  }
  let arr:number[][] = [];
  for (let i:number = 0; i < s.length; i++) {
    arr[i] = [];
  };
  let begin:number = 0;
  let max:number = 0;
  for (let i:number = 0; i < s.length; i++) {
    let j:number = 0;
    while (j <= i) {
      if (s[j] == s[i] && (i - j <= 1 || arr[j + 1][i - 1])) {
        arr[j][i] = 1
        if (i - j + 1 > max) {
          begin = j;
          max = i - j + 1;
        }
      }
      j++;
    }
  }
  return s.substr(begin, max);
}