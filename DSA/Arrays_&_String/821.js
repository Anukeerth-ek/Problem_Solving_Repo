// Shortest Distance to a Character

// Given a string s and a character c that occurs in s, return an array of integers answer where answer.length == s.length and answer[i] is the 
// distance from index i to the closest occurrence of character c in s.

// The distance between two indices i and j is abs(i - j), where abs is the absolute value function.

// ans:

var shortestToChar = function(s, c) {
    let newArr = [];

    for(let i = 0; i < s.length; i++) {
       if(s[i] === c) {
           console.log( i)
       }
    }
    // console.log(s)
};

console.log("hello")
console.log(shortestToChar("loveleetcode", 'e'))