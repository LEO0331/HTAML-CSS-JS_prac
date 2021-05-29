# Description
The array-form of an integer num is an array representing its digits in left to right order. For example, for num = 1321, the array form is [1,3,2,1]. Given num, the array-form of an integer, and an integer k, return the array-form of the integer num + k.
```
Input: num = [1,2,0,0], k = 34 Output: [1,2,3,4] Explanation: 1200 + 34 = 1234
Input: num = [2,7,4], k = 181 Output: [4,5,5] Explanation: 274 + 181 = 455
Input: num = [2,1,5], k = 806 Output: [1,0,2,1] Explanation: 215 + 806 = 1021
Input: num = [9,9,9,9,9,9,9,9,9,9], k = 1 Output: [1,0,0,0,0,0,0,0,0,0,0] Explanation: 9999999999 + 1 = 10000000000
```
# Concept
Array
# Solution
Add current element to the k value and assign the reminder as new value, looping through by diviiding 10 OR use BigInt(string/number)
```
/*
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
    let right = num.length - 1
    while(k){ // k as a carry
        if(right < 0) num.unshift(k % 10) //k longer than num.length
        else{
            k += num[right]
            num[right--] = k % 10
        }
        k = Math.floor(k/10)
    }
    return num
    //return [...(BigInt(num.join('')) + BigInt(k) + '')]
};
```
