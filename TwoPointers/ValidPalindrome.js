// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
let s = "race a car";
const isPalindrome = (s) =>{
    
    let l = 0;
    let r = s.length - 1;

    while(l < r)
    {
        while(!isAphanumeric(s[l]) && l < r)
        {
            l++;
        }

        while(!isAphanumeric(s[r]) && l < r)
        {
            r--;
        }

        if(s[l].toLowerCase() != s[r].toLowerCase()) return false;

        l++;
        r--;
    }
    
    return true;

};

const isAphanumeric = (c) =>
{
        if((97 <= c.toLowerCase().charCodeAt(0) && c.toLowerCase().charCodeAt(0) <= 122)  || (48 <= c.toLowerCase().charCodeAt(0) && c.toLowerCase().charCodeAt(0) <= 57))
        {
            return true
        }
    return false;
}


console.log(isPalindrome(s));