/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    const string = String(x);
    let reversed = "";
    for (let i = string.length - 1; i >= 0; i--) {
        reversed += string[i]
    }
    return reversed === string;
};
