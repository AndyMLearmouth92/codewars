/* Complete the code which should return true if the given object is a single ASCII letter (lower or upper case), false otherwise.

Starter code:

String.prototype.isLetter = function() {
}
*/

// Solution:

String.prototype.isLetter = function () {
  return /^[a-z]$/i.test(this);
};
