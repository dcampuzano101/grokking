const reverseLinkedList = (head) => {
  let current = head;
  let prev = null;
  while (current !== null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};
