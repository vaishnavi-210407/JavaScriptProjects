function findSecondLargest(arr) {

    let largest = -Infinity;
    let secondLargets = -Infinity;

    for(let i = 0; i <= arr.length; i++) {
        if(arr[i] > largest) {
            secondLargets = largest;
            largest = arr[i];
        } else if(arr[i] > secondLargets && arr[i] < largest) {
            secondLargets = arr[i];
        }
    }

    if(secondLargets === -Infinity) {
        return "No second Largest element";
    }

    return secondLargets;

}

console.log(findSecondLargest([10,5,3,30,15]));