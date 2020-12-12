function romanToInt(s: string): number {
  let map: { [index: string]: any } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  let res: number = 0;
  const letters: string[] = s.split('');
  for (let i = 0; i < letters.length; i++) {
    if (i + 2 <= s.length) {
      res += map[letters[i]] >= map[letters[i + 1]] ? map[letters[i]] : -map[letters[i]];
    } else {
      res += map[letters[i]];
    }
  }
  return res;
};