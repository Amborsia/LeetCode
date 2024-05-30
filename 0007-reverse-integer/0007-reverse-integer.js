/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    const string = String(x);
    let reversed = "";
    let is_minus = 0;
    let is_number = false;
    if (string[0] == '-') {
        is_minus = 1;
    }
    for (let i = string.length - 1; i >= is_minus; i--) {
        if (string[i] == '0' && is_number == false) {
            continue;
        }
        is_number = true;
        reversed += string[i]
    }
    if (is_minus == 1 && Number(reversed) < 2 ** 31 - 1) {
        return -reversed;
    } else if (is_minus == 0 && Number(reversed) < 2 ** 31 - 1) {
        return reversed;
    } else {
        return 0;
    }
};