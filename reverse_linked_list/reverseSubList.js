/* Problem Statement #
Given the head of a LinkedList and two positions ‘p’ and ‘q’, 
reverse the LinkedList from position ‘p’ to ‘q’.
*/

const reverseSubList = (head, p, q) => {
  if (p === q) {
    return head;
  }

  // after skipping 'p-1' nodes, current will point to 'p'th node
  let current = head,
    previous = null;
  let i = 0;
  while (current !== null && i < p - 1) {
    previous = current;
    current = current.next;
    i += 1;
  }
};
