/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var doubleIt = function(head) {
    let temp = head;
    let a = [];
    while(temp){
        a.push(temp.val);
        temp = temp.next
    }
    
    let carry = 0;
    let n = a.length;
    for(let i = n-1; i>=0; i--){
        carry += 2*(a[i]);
        a[i] = carry%10;
        carry = Math.floor(carry/10);
    }
    if(carry > 0) a.unshift(carry);
    
    let head2 = null;
    let temp2 = null;
    for(let e of a){
        t = new ListNode(e);
        if(head2){
            temp2.next = t;
            temp2 = temp2.next
        }else{
            head2=t
            temp2=head2
        }
    }
    return head2
};