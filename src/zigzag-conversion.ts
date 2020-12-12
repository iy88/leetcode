function convert(s: string, numRows: number): string {
  if (numRows == 1) return s;
  let rows: string[] = [];
  for (let i: number = 0; i < Math.min(numRows, s.length); i++)
    rows.push('');

  let curRow: number = 0;
  let goingDown: Boolean = false;

  for (let c of s.split('')) {
    rows[curRow] += c;
    if (curRow === 0 || curRow === numRows - 1) goingDown = !goingDown;
    curRow += goingDown ? 1 : -1;
  }

  let ret: string = '';
  for(let i of rows){
    ret+=i;
  }
  return ret;
}