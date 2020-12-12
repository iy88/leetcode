function intToRoman(num: number): string {
  return [
    ["", "M", "MM", "MMM"][Math.floor(num / 1000)],
    ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"][Math.floor(num % 1000 / 100)],
    ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"][Math.floor(num % 100 / 10)],
    ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"][Math.floor(num % 10)]
  ]
    .filter(v => v !== undefined)
    .join('');
};

console.log(intToRoman(58))