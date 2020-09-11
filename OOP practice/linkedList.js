// linked list and node constructors

const LinkedList = function() {
  // storage object with head, tail, size
  var list = {
    head: null,
    tail: null,
    size: 0
  };

  // add to tail
  list.addToTail = function(value) {
    var nextLink = Node(value);
    if (list.tail === null) {
      list.head = nextLink;
      list.tail = nextLink;
    } else {
      list.tail.next = nextLink;
      list.tail = nextLink;
    }

    list.size++;
    return list.size;

  };

  // remove from head
  list.removeFromHead = function() {
    var head = list.head.value;
    var newHead = list.head.next;
    list.head = newHead || null;
    list.size--;

    return head;
  };

  // list contains
  list.contains = function(value) {
    var check = list.head;
    while (check.next !== null) {
      if (check.value === value || check.next.value === value) {
        return true;
      } else {
        check = check.next;
      }
    }
    return false;
  };

  // access to list
  return list;
};

const Node = function(value) {
  // storage object with value and next
  var node = {
    value: value,
    next: null
  };

  // access to node
  return node;
};


// TESTS //
// var newList = new LinkedList();
// newList.addToTail(5);
// newList.addToTail(7);
// console.log(newList.size, newList.head.value, newList.tail.value); // 2, 5, 7
// newList.removeFromHead();
// console.log(newList.size, newList.head.value, newList.tail.value); // 1, 7, 7
// console.log(newList.contains(7)); // true
// console.log(newList.contains(9)); // false
