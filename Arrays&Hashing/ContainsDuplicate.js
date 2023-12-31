// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

let nums1 = [1,2,3,1];
let nums2 = [1,2,3,4];

const containsDuplicate = (nums) =>
{
    let flag = false;
    const newSet = new Set();
    for(let i of nums)
    {
        if(!newSet.has(i)) newSet.add(i);
        else return true
    }
    
    return flag;
}

console.log(containsDuplicate(nums1));
console.log(containsDuplicate(nums2));