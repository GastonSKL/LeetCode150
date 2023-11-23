// There is an integer array nums sorted in ascending order (with distinct values).
// Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
// Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.
// You must write an algorithm with O(log n) runtime complexity.

// let nums = [4,5,6,7,0,1,2];
// let target = 0;
// Output: 4

let nums = [4,5,6,7,0,1,2];
let target = 3;
// Output: -1

// let nums = [1];
// let target = 0;
// Output: -1

const search = (nums, target) =>
{
    let left = 0;
    let rigth = nums.length - 1;

    while(left <= rigth)
    {
        let mid = Math.floor((left + rigth) / 2);

        if(nums[mid] == target) return mid;

        if(nums[left] <= nums[mid])
        {
            if(target > nums[mid] || target < nums[left])
            {
                left = mid + 1
            }
            else
            {
                rigth = mid - 1;
            }
        }else
        {
            if(target < nums[mid] || target > nums[rigth])
            {
                rigth = mid - 1;
            }
            else
            {
                left = mid + 1;
            }
        }
    }

    return -1;
};

console.log(search(nums, target));