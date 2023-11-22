// You are given an m x n integer matrix matrix with the following two properties:

// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.

// You must write a solution in O(log(m * n)) time complexity.

let matrix = [[1,1],[2,2]];
let target = 3;
// Output: true

// let matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]];
// let target = 13;
// Output: false


//My aproach, very verbose and convoluted
// const searchMatrix = (matrix, target) => 
// {

//     if(matrix.length == 1)
//     {
//         for(let i = 0; i < matrix.length; i++)
//         {

//             let left = 0;
//             let rigth = matrix[i].length - 1;

//            while(left <= rigth)
//            {
//                 let mid = Math.floor((left + rigth) / 2);
//                 if(matrix[i][mid] === target) return true;
//                 if(matrix[i][mid] < target) left = mid + 1
//                 else rigth = mid - 1;
//            }
//         }
//     }else
//     {
//         for(let i = 0; i < matrix.length; i++)
//         {
//             if(matrix[i].length === 1)
//             {
//                 if(matrix[i][0] === target) return true;
//                 else continue
//             }

//             let left = 0;
//             let rigth = matrix[i].length - 1;

//             if(matrix[i][matrix[i].length - 1] < target) continue;

//             if(matrix[i][matrix[i].length - 1] >= target)
//             {
//                 for(let j = 0; j < matrix[i].length; j++)
//                 {
                    
//                     while(left <= rigth)
//                     {
//                         let mid = Math.floor((left + rigth) / 2)
//                         if(matrix[i][mid] === target) return true;
//                         if(matrix[i][mid] < target) left = mid + 1
//                         else rigth = mid - 1;
//                     }
//                 }
//             }
//         }
//     }

    

//     return false;
// };

//Binary search for matrixs
//Actually my implementatio is faster this one is 54ms and the one above is 48ms xD
const searchMatrix = (matrix, target) => 
{
    let left = 0;
    let rigth = matrix[0].length - 1;

    while(left < matrix.length && rigth >= 0)
    {
        if(matrix[left][rigth] === target) return true;

        if(matrix[left][rigth] > target) rigth--
        else left++;
    }

    return false
}

console.log(searchMatrix(matrix, target));