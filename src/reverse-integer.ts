function reverse(x: number): number {
  if (x < 0) {
    let ret = Number((x * -1).toString().split('').reverse().join('')) * -1;
    return ret >= -1 * Math.pow(2, 31) && ret <= Math.pow(2, 31) - 1 ? ret : 0;
  } else {
    let ret = Number(x.toString().split('').reverse().join(''));
    return ret >= -1 * Math.pow(2, 31) && ret <= Math.pow(2, 31) - 1 ? ret : 0;
  }
};