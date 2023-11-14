
// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 < numbers.length.
// Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.
// The tests are generated such that there is exactly one solution. You may not use the same element twice.
// Your solution must use only constant extra space.

let numbers = [1,3,4,5,7,10,11]; 
let target  = 9;
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

//O(n) solution with space complexity O(1);
const twoSum = (numbers, target) =>{

    let left = 0;
    let rigth = numbers.length - 1;

    for(let i = 0; i < numbers.length; i++)
    {
        let numLeft = numbers[left];
        let numRigth = numbers[rigth];

        if(numLeft + numRigth > target)
        {
            rigth--;
        }

        if(numLeft + numRigth < target)
        {
            left++;
        }

        if(numLeft + numRigth == target)
        {
            return [left + 1, rigth + 1];
        }
    }


}

//Brute force solution O(n2)
// const twoSum = (numbers, target) => 
// {
//     for(let i = 0; i < numbers.length ; i++)
//     {
//         for(let j = i + 1; j < numbers.length ; j++)
//         {
//             let num1 = numbers[i];
//             let num2 = numbers[j];
//             if(num1 + num2 == target)
//             {
//                 return [i+1,j+1];
//             } 

//             if(num1 + num2 > target)
//             {
//                 numbers.pop();
//             }
//         }
//     }

//     return null;
// };


console.log(twoSum(numbers, target));