// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

let nums = [1,1,1,2,2,3];
let k = 2;
// Output: [1,2]


// const topKFrequent = (nums, k) => 
// {
//    let map = new Map();

//    for(let i = 0; i < nums.length ; i++)
//    {
//         if(!map.has(nums[i]))
//         {
//             map.set(nums[i], 1);
//         } else
//         {
//             map.set(nums[i], map.get(nums[i]) + 1);
//         }
//    }

//    const mapSort = new Map([...map.entries()].sort((a,b) => b[1] - a[1]));

//    let count = 0;
//    let result = [];
//    for(let[key, val] of mapSort.entries())
//    {
//         if(count < k)
//         {
//             result.push(key)
//             count++;
//         }
//    }

//    return result;
// };

const topKFrequent = (nums, k) => 
{
   let map = new Map();

   for(let i = 0; i < nums.length; i++)
   {
        if(!map.has(nums[i]))
        {
            map.set(nums[i], 1);        
        }
        else
        {
            map.set(nums[i], map.get(nums[i]) + 1);
        }
   }

   let mapSorted = new Map([...map.entries()].sort((a,b) => b[1] - a[1]));
   let result = [];
   let count = 0;
   for(let[key, value] of mapSorted.entries())
   {
        if(count < k)
        {
            result.push(key);
            count++;
        } 
   }

   return result;
};