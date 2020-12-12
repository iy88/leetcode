/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function toNumber(l:ListNode):bigint{
  let arr = [];
  arr.unshift(l.val);
  if(l.next){
    arr.unshift(toNumber(l.next));
  }
  return BigInt(arr.join(''));
}

function toListNode(arr:number[]):ListNode | null{
  let res:ListNode | null = null;
  let code = 'res = new ListNode('+arr[0]+',';
  for(let i = 1; i < arr.length; i++){
    if(i + 1 !== arr.length){
      code += `new ListNode(${arr[i]},`;
    }else{
      code += `new ListNode(${arr[i]}`;
    }
  }
  code += arr.map(_=>')').join('');
  eval(code);
  return res;
}

function addTwoNumbers(l1: ListNode, l2: ListNode): ListNode | null{
  let sum:number[] = (toNumber(l1) + toNumber(l2)).toString().split('').reverse().map(s=>Number(s));
  return toListNode(sum);
};