// _________________________________________________________________________________
// 1. Problem Statement: Given an integer N, return the number of digits in N.

// const countDigitNumber = (numbers)=> {
//   const digitCount = Math.floor(Math.log10(numbers)+1)
//   console.log(digitCount)
// }
// countDigitNumber(1234566)
// _________________________________________________________________________________

// _________________________________________________________________________________
// 2. Reverse Digits of A Number

// const reverseDigit = (number) => {
//      // __________________FIRST APPROACH__________________
//      // console.log(number.toString().split('').reverse().join(''))

//      // __________________SECOND APPROACH__________________

//     //  let reversedNumber = 0;

//     //  while (number > 0) {
//     //       const lastDigit = number % 10;

//     //       reversedNumber = reversedNumber * 10 + lastDigit;

//     //       number = Math.floor(number / 10);
//     //  }
//     //  console.log(reversedNumber);
// };
// reverseDigit(45678);
// _________________________________________________________________________________

// _________________________________________________________________________________
// 3. Check if a number is Palindrome or Not

// const isPalindrome = (number) => {

// __________________FIRST APPROACH__________________
//  let numberHolder = number;

//  return number.toString().split("").reverse().join("") == numberHolder
//       ? `${number} is a palindrome number`
//       : `${number} is not a palindrome number`;

// __________________SECOND APPROACH__________________

// };
// console.log(isPalindrome(2002));
// _________________________________________________________________________________

// _________________________________________________________________________________
// 4. Given two integers N1 and N2, find their greatest common divisor.
// The Greatest Common Divisor of any two integers is the largest number that divides both integers.

// Example 1:
// Input:N1 = 9, N2 = 12
// Output:3
// Explanation:Factors of 9: 1, 3 and 9
// Factors of 12: 1, 2, 3, 4, 6, 12
// Common Factors: 1, 3 out of which 3 is the greatest hence it is the GCD.

// Example 2:
// Input:N1 = 20, N2 = 15
// Output: 5
// Explanation:Factors of 20: 1, 2, 4, 5
// Factors of 15: 1, 3, 5
// Common Factors: 1, 5 out of which 5 is the greatest hence it is the GCD.

// ans:

// const findGCD = (num1, num2) => {
//      let largestNumber = num1 > num2 ? num1 : num2;
//      let gcd;
//      for (let i = 1; i < largestNumber; i++) {
//           if(num1 % i  === 0 && num2 % i === 0) {
//             gcd = i;
//           }
//          }
//          return gcd;
// };
// console.log(findGCD(9, 12));
// _________________________________________________________________________________

// _________________________________________________________________________________
// 5. Check if a number is Armstrong Number or not

// Problem Statement: Given an integer N, return true it is an Armstrong number otherwise return false.

// An Amrstrong number is a number that is equal to the sum of its own digits each raised to the power of the number of digits

// const findArmstrongNumber = (number) => {
// ___________First Approach___________
//  const numberLength = number.toString().length;
//  const numberToArray = number.toString().split("").join("");

//  let sum = 1;
//  let newSum = 0;
//  for (let i = 0; i < numberLength; i++) {
//       sum = 1;
//       for (let j = 0; j < numberLength; j++) {
//            sum *= Number(numberToArray[i]);
//       }
//       newSum += sum;
//  }
//  return number === newSum ? `The Given number(${number}) is Armstrong` : `Given number (${number}) is palindrome`;

// ___________Second Approach___________
//     const numStr = number.toString();
//     const numDigits = numStr.length;
//     console.log('numstr',typeof numStr)
//     // Calculate sum of each digit raised to power of number of digits
//     let sum = 0;
//     for (let i = 0; i < numDigits; i++) {
//       const digit = parseInt(numStr[i]);
//       sum += Math.pow(digit, numDigits);
//     }

//     // Check if the number is equal to the sum
//     return number === sum ?
//       `The given number (${number}) is an Armstrong number` :
//       `The given number (${number}) is not an Armstrong number`;
// };
// console.log(findArmstrongNumber(153));
// _________________________________________________________________________________

// _________________________________________________________________________________
// 6. Print all Divisors of a given Number

// Problem Statement: Given an integer N, return all divisors of N.

// A divisor of an integer N is a positive integer that divides N without leaving a remainder. In other words, if N is divisible by another integer
// without any remainder, then that integer is considered a divisor of N.

// const getDivisor = (n) => {
//  const integerArray = [];

//  for (let i = 1; i <= integer; i++) {
//       if (integer % i === 0) {
//            integerArray.push(i);
//       }
//  }
//  return integerArray;

//      const divisors = new Set();

//      for (let i = 1; i * i <= n; i++) {
//           if (n % i === 0) {
//                divisors.add(i);
//                divisors.add(n / i); // Include the paired divisor
//           }
//      }

//      return Array.from(divisors).sort((a, b) => a - b);
// };

// getDivisor(36);

// _________________________________________________________________________________

// _________________________________________________________________________________

// 7. Check if a number is prime or not

// Problem Statement: Given an integer N, check whether it is prime or not. A prime number is a number that is only divisible by 1 and itself and
// the total number of divisors is 2.

// ans:

// const findPrimeNumber = (number)=> {

//     if(number < 1) {console.log("Plese enter number greater than 1"); return false}

//     for(let i = 2; i < number; i++) {
//         if(number % i === 0) {
//             return false
//         }

//     }
//     return true
// }

// console.log(findPrimeNumber(8))

// _________________________________________________________________________________

// ______________________
// 1. Recurrsion
// let number = 1
// const printUptoMax = (max)=> {
//     if(number > max) return

//     console.log(number)

//     number ++;

//     printUptoMax(max)

// }
// printUptoMax(5)

// ______________________

// 2. Print Name maxTimes using Recurrsion

// const printName = (name, maxTime) => {
//      if (maxTime <= 0) return;

//      console.log(name);

//      printName(name, maxTime - 1);
// };

// printName("Anukeerth", 5);

// ______________________

// 3. Print 1 to N using Recursion

// ______________________
// let num = 0;
// const handlePrint1toN = (number) => {
//     let subractor = 1
//      if (number < 1) return;
//     num++
//      console.log(num);

//      handlePrint1toN(number - subractor);
// };

// handlePrint1toN(5);
//  ______________________

// const handlePrint1toN = (target, maxNumber)=> {

// }

// handlePrint1toN(1, 5)

//  ______________________
// 4. Print N to 1 using Recursion

// const printNto1 = (number, target) => {
//      if (number < 1) return;

//      console.log(number);
//      printNto1(number - target, target);
// };
// printNto1(5, 1);
//  ______________________

// 5. Sum of first N Natural Numbers

// let sum = 0;
// const handleSumOfNaturalNumber = (number) => {
//      if (number < 1) return 0;

//      return number + handleSumOfNaturalNumber(number - 1);
// };

// console.log(handleSumOfNaturalNumber(5));
//  ______________________

//  ______________________
// Factorial of a Number : Iterative and Recursive
// ans:
// const handleFactorial = (number) => {

//     if(number === 0) return 1
//     return number * handleFactorial(number - 1)
// };
// console.log(handleFactorial(5));
//  ______________________

//  ______________________
// 6. Reverse a given Array
// ans:
// let newArr = [];
// const handleReverseArray = (arr) => {
//     if (arr.length === 0) return [];
//     return [arr[arr.length - 1]].concat(handleReverseArray(arr.slice(0, arr.length - 1)));
// };

// console.log(handleReverseArray([1, 3, 5, 7]));

// console.log(newArr);
// console.log(handleReverseArray([1, 3, 5, 7], 4));
//  ______________________

//  ______________________
// 7. Check if the given String is Palindrome or not

// Problem Statement: "Given a string, check if the string is palindrome or not."  A string is said to be palindrome if the reverse of
// the string is the same as the string.

// Examples:

// Example 1:
// Input: Str =  “ABCDCBA”
// Output: Palindrome
// Explanation: String when reversed is the same as string.

// Example 2:
// Input: Str = “TAKE U FORWARD”
// Output: Not Palindrome
// Explanation: String when reversed is not the same as string.

// ans:
// const handleStringPalindrome = (str) => {
    
//     const checkPalindrome = (s, start, end)=> {

//         if(start > end) return true;

//         if(s[start] !== s[end]) return false;

//         return checkPalindrome(str, start +1, end - 1)
//     }

//     return checkPalindrome(str, 0, str?.length - 1) ? 'Palindrome' : 'Not a Palindrome'
// };
// console.log(handleStringPalindrome("ABCDXBA"));
//  ______________________

//  ______________________
// 8. Given a zero-based permutation nums (0-indexed), build an array ans of the same length where ans[i] = nums[nums[i]] for each 
// 0 <= i < nums.length and return it.

// A zero-based permutation nums is an array of distinct integers from 0 to nums.length - 1 (inclusive).

// Example 1:

// Input: nums = [0,2,1,5,3,4]
// Output: [0,1,2,4,5,3]
// Explanation: The array ans is built as follows: 
// ans = [nums[nums[0]], nums[nums[1]], nums[nums[2]], nums[nums[3]], nums[nums[4]], nums[nums[5]]]
//     = [nums[0], nums[2], nums[1], nums[5], nums[3], nums[4]]
//     = [0,1,2,4,5,3]
// Example 2:

// Input: nums = [5,0,1,2,3,4]
// Output: [4,5,0,1,2,3]
// Explanation: The array ans is built as follows:
// ans = [nums[nums[0]], nums[nums[1]], nums[nums[2]], nums[nums[3]], nums[nums[4]], nums[nums[5]]]
//     = [nums[5], nums[0], nums[1], nums[2], nums[3], nums[4]]
//     = [4,5,0,1,2,3]
 

// Constraints:

// 1 <= nums.length <= 1000
// 0 <= nums[i] < nums.length
// The elements in nums are distinct.
 

// Follow-up: Can you solve it without using an extra space (i.e., O(1) memory)?

// ans:

//  ______________________