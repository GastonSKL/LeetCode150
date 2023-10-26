// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

let strs = ["eat","tea","tan","ate","nat","bat"];

const groupAnagrams = (strs) => {
    let answer = {};

    for(let s of strs)
    {
        let count = Array(26).fill(0);

        for(let c of s)
        {
            count[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1 
        }

        let key = count.toString();

        if(answer[key])
        {
            answer[key].push(s);
        }else
        {
            answer[key] = [s];
        }

    }

    return Object.values(answer);
}



console.log(groupAnagrams(strs));