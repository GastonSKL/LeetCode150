// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

let nums = [3,7,3,5,2,8];
let target = 8;
// Output: [0,1]

const twoSum = (array, target) => 
{
    let hashtable = {};

    for(let i = 0; i < array.length; i++)
    {
        let difference = target - array[i];

        if(hashtable.hasOwnProperty(difference))
        {
            return [hashtable[difference], i]
        }

        hashtable[array[i]] = i;
    }
}
console.log(twoSum(nums, target));