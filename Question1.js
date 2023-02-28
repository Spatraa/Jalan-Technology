function findElementsWithSumZero(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return arr[i]+" "+arr[j];
            }
        }
    }
    return "No Elements found";
}
console.log(findElementsWithSumZero([-4, 1, 3, -2, -1]));  // prints [-1, 1]
console.log(findElementsWithSumZero([-1, 2, 3, 5]));  // prints "No Elements   
