// Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.
// Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.
// Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.
// Return the minimum integer k such that she can eat all the bananas within h hours.

let piles = [3,6,7,11];
let h = 8;
// Output: 4

// let piles = [30,11,23,4,20];
// let h = 5;
// Output: 30

// let piles = [30,11,23,4,20];
// let h = 6;
// Output: 23

const minEatingSpeed = (piles, h) =>
{

    let left = 1;
    let rigth = Math.max(...piles);

    let res = rigth;

    while(left <= rigth)
    {
        let mid = Math.floor((left + rigth) / 2);

        let hours = 0;

        for(let i = 0; i < piles.length; i++)
        {
            hours += Math.ceil(piles[i] / mid);
        }

        if(hours <= h)
        {
            res = Math.min(res, mid);
            rigth = mid - 1;
        }
        else
        {
            left = mid + 1;
        }
    }

    return res;
    

};


console.log(minEatingSpeed(piles, h));