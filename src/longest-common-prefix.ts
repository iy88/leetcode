function longestCommonPrefix(strs: string[]): string {
  let res: string = "";
  if (strs.length > 0) {
    let firstStr: string = strs[0];
    if (strs.length > 1) {
      for (let i = 0; i < firstStr.length; i++) {
        let flag: Boolean = true;
        for (let j = 1; j < strs.length; j++) {
          if (new RegExp(`^${res + firstStr.charAt(i)}`).test(strs[j])) {
            flag = true;
          } else {
            flag = false;
            break;
          }
        }
        if (flag === true) {
          res += firstStr.charAt(i);
        } else {
          break;
        }
      }
    } else {
      res = firstStr;
    }
  }
  return res
};