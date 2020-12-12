function isPalindrome(x: number): boolean {
  const s:string[] = x.toString().split('');
  return s.join('') === s.reverse().join('');
};