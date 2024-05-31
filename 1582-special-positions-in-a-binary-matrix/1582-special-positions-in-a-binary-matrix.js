/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function (mat) {

    let vertical = new Array(mat.length).fill(0);
    let horizontal = new Array(mat[0].length).fill(0);

    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            horizontal[j] += mat[i][j];
            vertical[i] += mat[i][j];
        }
    }

    let result = 0;
    for (let i = 0; i < vertical.length; i++) {
        if (vertical[i] == 1) {
            for (let j = 0; j < horizontal.length; j++) {
                if (horizontal[j] == 1 && mat[i][j] == 1) {
                    result++
                }
            }
        }
    }

    return result;
};