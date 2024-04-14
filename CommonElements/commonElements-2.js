// without using inbuilt functions

function findCommonElements(arr1, arr2) {
    let commonElements = [];

    //iterate through each element of the first array
    for (let i = 0; i < arr1.length; i++) {
        //iterate through each element of the second array
        for (let j = 0; j < arr2.length; j++) {
            // Check if the current element of the first array is equal to any element of the second array
            if (arr1[i] === arr2[j]) {
                // If it is, check if the element is already in the commonElements array
                let isAlreadyAdded = false;
                for (let k = 0; k < commonElements.length; k++) {
                    if (commonElements[k] === arr1[i]) {
                        isAlreadyAdded = true;
                        break;
                    }
                }
                // If the element is not already in the commonElements array, add it
                if (!isAlreadyAdded) {
                    commonElements.push(arr1[i]);
                }
                // Break the loop since the element is found
                break;
            }
        }
    }
    // Return the array containing common elements
    return commonElements;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
const commonElementsArray = findCommonElements(array1, array2);
console.log(commonElementsArray); // [3,4,5]