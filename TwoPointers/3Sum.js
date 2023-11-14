// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.

let nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]

// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
// O(n2)
const threeSum = (nums) => 
{
    let response = new Set();

    nums.sort((a,b)=> a - b);

    for(let i = 0; i < nums.length; i++)
    {
        if(i > 0 && nums[i] == nums[i - 1])
        {
            continue;
        }
        
        let left = i + 1;
        let rigth = nums.length - 1;

        while(left < rigth)
        {
            let sum = nums[i] + nums[left] + nums[rigth];

            if(sum > 0) rigth--;
            if(sum < 0) left++;

            if(sum == 0)
            {
                response.add([nums[i], nums[left], nums[rigth]]);
                left++;
                while(nums[left] == nums[left - 1] && left < rigth)
                {
                    left++;
                }
            }
        }
        
    }

    return Array.from(response, triplet => triplet.map(Number));
}


//brute force solution O(n3); Way too slow;

// const threeSum = (nums) => 
// {
//     let response = new Set();

//     for(let i = 0; i < nums.length ; i++)
//     {
//         for(let j = i + 1; j < nums.length; j++)
//         {
//             for(let k = j + 1; k < nums.length; k++)
//             {
//                 if(nums[i] + nums[j] + nums[k] === 0)
//                 {
//                     const triplet = [nums[i], nums[j], nums[k]].sort().toString();

//                     if (!response.has(triplet)) {
//                         response.add(triplet);
//                     }
//                 }
//             }
//         }
//     }

//     return Array.from(response, triplet => triplet.split(',').map(Number));
// };

console.log(threeSum(nums));