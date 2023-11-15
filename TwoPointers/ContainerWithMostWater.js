// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
// Find two lines that together with the x-axis form a container, such that the container contains the most water.
// Return the maximum amount of water a container can store.
// Notice that you may not slant the container.

let height = [1,3,2,5,25,24,5];
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
//O(n)
const maxArea = (height) =>
{
    let res = 0;

    let leftPointer = 0;
    let rigthPointer = height.length - 1;

    for(let i = 0; i < height.length; i++)
    {
         let h = Math.min(height[leftPointer], height[rigthPointer]);
         let area = (rigthPointer - leftPointer) * h;

         res = Math.max(res, area);

       
         if(height[leftPointer] > height[rigthPointer])
         {
            rigthPointer--;
         }else
         {
            leftPointer++;
         }
    }

    return res;
}

//Brute force aproach O(n2)
// const maxArea = (height) => 
// {

//     let res = 0;

//     for(let i = 0; i < height.length; i++)
//     {
//         for(let j = i + 1; j < height.length; j++)
//         {

//             let h = height[i] > height[j] ? height[j] : height[i];

//             let area =  ( j - i) * h;

//             res = Math.max(res, area);
//         }
//     }

//     return res;

// };

console.log(maxArea(height));