// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

let s = "anagram";
let t = "nagaram";
let s1 = "rat";
let t1 = "tat";

const isAnagram = (s, t) => 
{
    return s.split('').sort().join() == t.split('').sort().join();
}

console.log(isAnagram(s,t));
console.log(isAnagram(s1,t1));