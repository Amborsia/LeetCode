/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function (nums) {
    if (nums.length <= 2) return -1;
    nums.sort((a, b) => a - b);

    let min = nums[0];
    let max = nums[nums.length - 1];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] != min && nums[i] != max) {
            return nums[i];
        }
    }
};