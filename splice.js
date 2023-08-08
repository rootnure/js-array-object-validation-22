const friendsAge = [ 23, 31, 32, 31, 25, 23, 30 ];

/**
 * Removes elements from an array
 * if necessary, inserts new elements in their place
 * returning the deleted elements
 * Will change the original array
 */

const partial = friendsAge.splice(2, 3, 7, 8, 5, 6);
console.log(partial);
console.log(friendsAge);