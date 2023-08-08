const county = 'Bangladesh';
const age = 52
const isIndependent = true;
const student = {id: 121, class: 11, name: 'Agun'};
const friendsAge = [23, 31, 32, 31, 25, 26, 31];
function add (num1, num2) {
    return num1 + num2;
}

console.log(typeof county);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
// check array using Array.isArray()
console.log(Array.isArray(friendsAge));
console.log(typeof add);

// ----------------
console.log(friendsAge.includes(25));
console.log(friendsAge.includes(52));

if(friendsAge.indexOf(31) !== -1) {
    console.log(true);
}
else {
    console.log(false);
}

// array concat :
const newFriendsAge = [21, 24, 26, 23, 30];
const allFriendsAge = friendsAge.concat(newFriendsAge);
console.log(allFriendsAge);