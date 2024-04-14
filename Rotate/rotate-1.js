//Write a function to rotate an array to the right by k steps.

let arr = [1, 2, 3, 4, 5];
let k = 13;

for (let times = 0; times < k; times++) {
    arr.unshift(arr.pop());
}

console.log(arr);