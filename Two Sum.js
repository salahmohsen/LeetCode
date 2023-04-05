const twoSum = function (nums, target) {
  const myMap = {};
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (diff in myMap) return [myMap[diff], i];
    myMap[nums[i]] = i;
  }
};
twoSum([2, 7, 11, 15], 9);
// twoSum([3, 2, 4], 6);
// twoSum([3, 3], 6);
