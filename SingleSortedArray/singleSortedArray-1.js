//Write a function to merge two sorted arrays into a single sorted array.

let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9,10];

function singleSortedArray(arr1,arr2){
    let mergeArray = arr1.concat(arr2)
    let result = mergeArray.sort((a,b) => {return a-b})
    return result;
}
console.log(singleSortedArray(arr1,arr2))// [1,2,3,4,5,6,7,8,9,10]