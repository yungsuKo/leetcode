/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let newNodeList = new ListNode(0, null);
    let currNode = newNodeList
    
    while(list1 && list2){
        if(list1.val < list2.val){
            currNode.next= list1;
            list1 = list1.next;
        }else{
            currNode.next= list2;
            list2 = list2.next;
        }
        currNode = currNode.next;
    }
    
    currNode.next = list1 || list2
    return newNodeList.next
};