function findIndex(arr, target) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === target) {
            return i;
        } 
    }
}

console.log(findIndex([10, 20, 30, 40], 20));
console.log(findIndex([10, 20, 30, 40], 40));