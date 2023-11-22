// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
//HARD PROBLEM
let height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

// let height = [4,2,0,3,2,5]
// Output: 9
//O(1) space complexity solution: 
const trap = (height) => 
{
    
    if(height.length == 0) return 0;

    let left        = 0;
    let rigth       = height.length - 1;
    let leftMax     = height[left];
    let rigthMax    = height[rigth];
    let result      = 0;

    while(left < rigth)
    {
        if(leftMax < rigthMax)
        {
            left++;
            leftMax = Math.max(leftMax, height[left]);
            result += leftMax - height[left];
        }else{
            rigth--;
            rigthMax = Math.max(rigthMax, height[rigth]);
            result += rigthMax - height[rigth];
        }
    }


    return result;
};

console.log(trap(height));