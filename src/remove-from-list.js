function removeKFromList(l, k) {
  if (!l) {
    return l;
  }

  while (l && l.value === k) {
    l = l.next;
  }

  let currentNode = l;

  while (currentNode && currentNode.next) {
    if (currentNode.next.value === k) {
      currentNode.next = currentNode.next.next;
    } else {
      currentNode = currentNode.next;
    }
  }

  return l;
}

module.exports = {
  removeKFromList
};
