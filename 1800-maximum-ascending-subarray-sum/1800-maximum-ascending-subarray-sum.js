/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function (nums) {
    let stack = []

    let max = 0;
    let result = 0;
    stack.push(nums[0]);
    for (let i = 1; i < nums.length; i++) {


        if (nums[i] > stack[stack.length - 1]) {
            stack.push(nums[i]);
        } else {
            while (stack.length > 0) {
                max += stack.pop();
            }
            result = Math.max(result, max);
            max = 0
            stack.push(nums[i]);
        }
    }
    while (stack.length > 0) {
        max += stack.pop();
    }
    result = Math.max(result, max);

    return result;
};