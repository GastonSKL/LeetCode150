// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

let strs = ["eat","tea","tan","ate","nat","bat"];

const groupAnagrams = (strs) => {
    let respuesta = {};

    for(let s of strs)
    {
        let abc = new Array(26).fill(0);

        for(let c of s)
        {
            abc[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }

        let key = abc.toString();

        if(respuesta[key])
        {
            respuesta[key].push(s);
        }
        else
        {
            respuesta[key] = [s];
        }
    }

    return Object.values(respuesta);
}



console.log(groupAnagrams(strs));