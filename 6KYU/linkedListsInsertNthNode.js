/* Linked Lists - Insert Nth

Implement an InsertNth() function (insert_nth() in PHP) which can insert a new node at any index within a list.

InsertNth() is a more general version of the Push() function that we implemented in the first kata listed below. Given a list, an index 'n' in the range 0..length, and a data element, add a new node to the list so that it has the given index. InsertNth() should return the head of the list.

insertNth(1 -> 2 -> 3 -> null, 0, 7) === 7 -> 1 -> 2 -> 3 -> null)
insertNth(1 -> 2 -> 3 -> null, 1, 7) === 1 -> 7 -> 2 -> 3 -> null)
insertNth(1 -> 2 -> 3 -> null, 3, 7) === 1 -> 2 -> 3 -> 7 -> null)
You must throw/raise an exception (ArgumentOutOfRangeException in C#, InvalidArgumentException in PHP) if the index is too large.

The push() and buildOneTwoThree() (build_one_two_three() in PHP) functions do not need to be redefined. The Node class is also preloaded for you in PHP.

Starter code:

function Node(data) {
  this.data = data;
  this.next = null;
}

function insertNth(head, index, data) {
  // Your code goes here.
  // Return the head of the list.
}
*/

// Solution:

function Node(data) {
  this.data = data;
  this.next = null;
}

function insertNth(head, index, data) {
  if (index < 0) {
    throw new Error("index out of bounds");
  }
  let newNode = new Node(data);

  if (index === 0) {
    newNode.next = head;
    return newNode;
  }
  let current = head;
  let currentIndex = 0;

  while (current !== null && currentIndex < index - 1) {
    current = current.next;
    currentIndex++;
  }

  if (current === null) {
    throw new Error("index out of bounds");
  }
  newNode.next = current.next;
  current.next = newNode;
  return head;
}
