const names = ['abul', 'babul', 'cabul', 'dabul', 'ebul', 'babul', 'abul', 'kubul', 'gabul', 'cabul', 'babul', 'abul', 'abul'];

function removeDuplicate(names) {
    const unique = [];
    for(const name of names) {
        if(!unique.includes(name)){
            unique.push(name);
        }
        continue;
    }
    return unique;
}

const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);