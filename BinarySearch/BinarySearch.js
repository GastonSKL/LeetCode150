// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
// You must write an algorithm with O(log n) runtime complexity.

let nums = [-1,0,3,5,9,12];
let target = 9;
// Output: 4
// Explanation: 9 exists in nums and its index is 4

// let nums = [-1,0,3,5,9,12];
// let target = 2;
// Output: -1
// Explanation: 2 does not exist in nums so return -1

//Solution using pointers
// const search = (nums, target) => 
// {

//     let left = 0;
//     let rigth = nums.length;

//     for(let i = 0; i < nums.length; i++)
//     {
//         if(nums[left] != target) left++;

//         if(nums[rigth] != target) rigth--;

//         if(nums[left] == target) return left;

//         if(nums[rigth] == target) return rigth;
//     }

//     return -1;
// };

//Solution using binary search

const search = (nums, target) =>
{
   let left = 0;
   let rigth = nums.length - 1;

   while(left <= rigth)
   {
    let mid = Math.floor((left + rigth) / 2);

    if(nums[mid] === target) return mid;

    if(nums[mid] < target) left = mid + 1
    else rigth = mid - 1;
   }

   return -1;
}


console.log(search(nums, target));