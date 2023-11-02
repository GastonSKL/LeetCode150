// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

let nums = [100,4,200,1,3,2];
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

const longestConsecutive = (nums) => {
    let set = new Set(nums);
    let longes = 0;
    let length = 0;

    for(let n of nums)
    {
        if(!set.has(n - 1))
        {
            length = 0;
            while(set.has(n + length))
            {
                length++;
            }
            longes = Math.max(length, longes);
        } 
    }

    return longes;

};