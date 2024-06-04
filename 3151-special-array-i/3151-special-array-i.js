/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isArraySpecial = function (nums) {
    if (nums.length == 1) return true;

    let flag = 0;
    let before = 0;    // 1 = odd 2 = even
    if (nums[0] % 2 == 0) {
        flag = 1;
    } else {
        flag = 2;
    }
    for (let i = 1; i < nums.length; i++) {

        if (nums[i] % 2 === 0) {
            before = 1;
        } else {
            before = 2;
        }

        if (flag === before) {
            return false;
        }
        else {
            flag = before;
        }

    }
    return true;
};