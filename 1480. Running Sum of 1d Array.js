/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Solution 1 // Most efficient
const runningSum = function (nums) {
  let sum = 0;
  return nums.map((num) => (sum += num));
};

// Solution 2
// const runningSum = function (nums) {
//   if (!nums.length) return [];
//   for (let i = 1; i < nums.length; i++) {
//     nums[i] = nums[i - 1] + nums[i];
//   }
//   return nums;
// };

// Solution 3
// const runningSum = function (nums) {
//   if (!nums.length) return;
//   let sumArr = [];
//   for (let i = 0; i < nums.length; i++) {
//     sumArr.push(nums.slice(0, i + 1).reduce((acc, i) => acc + i, 0));
//   }
//   return sumArr;
// };

runningSum([1, 2, 3, 4]); //Expected [1,3,6,10]
// runningSum([1, 1, 1, 1, 1]); //ُExpected [1,2,3,4,5]
