/**
 * @param {number[]} nums
 * @return {number}
 */
function maximumTripletValue(nums) {
    let max_a = 0;
    let temp = 0;
    let result = 0;

    for (let i = 0; i < nums.length; i++) {
        if (i > 1) {
            if (temp * nums[i] > result) {
                result = temp * nums[i];
            }
        }

        if (nums[i] > max_a) {
            max_a = nums[i];
        }

        if (max_a - nums[i] > temp) {
            temp = max_a - nums[i];
        }
    }

    return result;
}