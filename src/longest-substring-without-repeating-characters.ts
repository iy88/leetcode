function lengthOfLongestSubstring(s: string): number {
  let res: number[] = [];
  if (s.length > 1) {
    for (let i: number = 0; i < s.length - 1; i++) {
      let last: string = s[i];
      let length: number = 1;
      for (let j: number = i + 1; j < s.length; j++) {
        if (last.indexOf(s[j]) === -1) {
          length++;
          last += s[j];
        } else {
          last = '';
          break;
        }
      }
      res.push(length);
    }
  } else if (s.length === 1) {
    res.push(1);
  } else if (s.length < 1) {
    res.push(0);
  }
  return Math.max(...res);
};