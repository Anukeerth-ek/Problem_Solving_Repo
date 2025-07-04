// Alice and Bob are playing a game. Initially, Alice has a string word = "a".

// You are given a positive integer k.

// Now Bob will ask Alice to perform the following operation forever:

// Generate a new string by changing each character in word to its next character in the English alphabet, and append it to the original 
// word.
// For example, performing the operation on "c" generates "cd" and performing the operation on "zb" generates "zbac".

// Return the value of the kth character in word, after enough operations have been done for word to have at least k characters.

// Note that the character 'z' can be changed to 'a' in the operation.


// Example 1:

// Input: k = 5

// Output: "b"

// Explanation:

// Initially, word = "a". We need to do the operation three times:

// Generated string is "b", word becomes "ab".
// Generated string is "bc", word becomes "abbc".
// Generated string is "bccd", word becomes "abbcbccd".
// Example 2:

// Input: k = 10

// Output: "c"

 

// Constraints:

// 1 <= k <= 500


// ans:
// var kthCharacter = function(k) {
//     const nextChar = (c) => String.fromCharCode(((c.charCodeAt(0) - 97 + 1) % 26) + 97);

//   let word = 'a';

//   while (word.length < k) {
//     let nextPart = '';
//     for (let i = 0; i < word.length; i++) {
//       nextPart += nextChar(word[i]);
//     }
//     word += nextPart;
//   }

//   return word[k - 1];
// };
