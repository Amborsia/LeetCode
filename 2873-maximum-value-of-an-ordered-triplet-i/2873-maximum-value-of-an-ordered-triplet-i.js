/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function (nums) {
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if ((nums[i] - nums[j]) * nums[k] > max) {
                    max = (nums[i] - nums[j]) * nums[k];

                }
            }
        }
    }
    return max;
};