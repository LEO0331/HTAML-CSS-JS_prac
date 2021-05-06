# Description
Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null. For example, the following two linked lists begin to intersect at node c1:
```
A:          a1 → a2
                   ↘
                     c1 → c2 → c3
                   ↗            
B:     b1 → b2 → b3
```
It is guaranteed that there are no cycles anywhere in the entire linked structure. Note that the linked lists must retain their original structure after the function returns.
# Concept
Linked Lists, Hash map, Two-pointer
# Solution
1. Build a Hash for one linked list and search whether it contains node of the other linked list -> time/space: O(n)
```
/*
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/*
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let hash = new Set()
    while(headA !== null){
        hash.add(headA)
        headA = headA.next
    }
    while(headB !== null){
        if(hash.has(headB)){
            return headB
        }
        headB = headB.next
    }
    return null
};
```
2. -> time: O(n), space: O(1)
```

```

