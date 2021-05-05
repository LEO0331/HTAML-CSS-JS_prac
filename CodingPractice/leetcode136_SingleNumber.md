# Description
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one. Follow up: implement a solution with a linear runtime complexity and without using extra memory.
# Concept
Hash Table, Bit operation(136,137,260,645)
# Solution
1. Record each element with key-value pair and take the key of single appeared element
```
/*
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    /*
    if(nums.length === 1){
        return nums[0]
    }
    */
    let map = {}
    for(let i=0; i<nums.length; i++){
        if(map[nums[i]]){
            map[nums[i]] = i
        }else{
            map[nums[i]] = -1
        }
    }
    return Object.keys(map).find(key => map[key] === -1) 
};
```
2. Bitwise XOR (^)
```
var singleNumber = function(nums) {
   let result = 0
   for(let i=0; i<nums.length; i++){
       result = result ^ nums[i]
   }
   return result
};
```
# Complement
Compare each bit of two numbers in binary form, if the binary bit is the same = 0, different = 1 
- 0 XOR 0 = 0
- 0 XOR 1 = 1
- 1 XOR 0 = 1
- 1 XOR 1 = 0
- Commutative law: a ^ b ^ c = a ^ c ^ b
