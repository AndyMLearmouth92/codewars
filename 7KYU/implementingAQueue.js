/* In this problem, we are going to be implementing our own enqueue, dequeue, and size methods for the queue constructor we are creating, so we should be able to create new instances of the Queue.

The enqueue method takes in the item as a parameter, while the dequeue method does not.
The size method simply returns the number of items in the queue.
Wait, what?

To enqueue an item into the queue means to insert an item into the back, or tail, of the queue.
To dequeue an item means means to remove the item at the front, or head, of the queue.
In a queue, we remove the item the least recently added.
JavaScript Methodology

Queues can be implemented in JavaScript using arrays.

You can use the built in push or unshift functions in order to add items to the queue array as well as the shift or pop to remove them.

As long as the tests pass, go for it!

Starter code:

var Queue = function() {
  // implement your Queue constructor here
};

Queue.prototype.enqueue = function(item) {
  // add item to the queue
};

Queue.prototype.dequeue = function() {
  // remove item from the front of the queue and return its value
};

Queue.prototype.size = function() {
  // return number of items in queue so far
};
*/

// Solution 1:

var Queue = function () {
  this.queue = [];
};

Queue.prototype.enqueue = function (item) {
  return this.queue.push(item);
};

Queue.prototype.dequeue = function () {
  return this.queue.shift();
};

Queue.prototype.size = function () {
  return this.queue.length;
};

// Solution 2:

var Queue = function () {
  this.storage = [];
  this.head = 0;
  this.tail = 0;
};

Queue.prototype.enqueue = function (item) {
  this.storage[this.tail++] = item;
};

Queue.prototype.dequeue = function () {
  if (this.size()) {
    let toReturn = this.storage[this.head];
    this.head++;
    return toReturn;
  }
};

Queue.prototype.size = function () {
  return this.tail - this.head;
};
