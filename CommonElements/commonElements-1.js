//Write a function to find the common elements between two arrays.

function findCommonElements(arr1, arr2) {
    let commonElements = [];
    // Iterate through each element of the first array
    for (let i = 0; i < arr1.length; i++) {
        // Check if the current element exists in the second array
        if (arr2.includes(arr1[i])) {
            commonElements.push(arr1[i])
        }
    }
    return commonElements
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
const commonElementsArray = findCommonElements(array1, array2);
console.log(commonElementsArray);