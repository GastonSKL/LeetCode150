// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

let nums = [1,1,1,2,2,3];
let k = 2;
// Output: [1,2]

const topKFrequent = (nums, k) => 
{
   let map = new Map();

   for(let i = 0; i < nums.length; i++)
   {

        if(!map.has(nums[i]))
        {
            map.set(nums[i], 1)
        }else
        {
            map.set(nums[i], map.get(nums[i]) + 1)
        }

   }

   let mapSorted = new Map([...map.entries()].sort((a,b) => b[1] - a[1]));
   let respuesta = [];
   let count = 0;

   for(let [key, value] of mapSorted.entries())
   {
        if(count < k)
        {
            respuesta.push(key)
            count++;
        }
   }

   return respuesta;

};

console.log(topKFrequent(nums,k));

