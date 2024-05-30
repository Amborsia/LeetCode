/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
     let result = [];

    // backtrack 함수 정의
    function backtrack(S, left, right) {
        // 현재 조합이 완성된 경우
        if (S.length === 2 * n) {
            result.push(S);
            return;
        }

        // 왼쪽 괄호를 추가할 수 있는 경우
        if (left > 0) {
            backtrack(S + '(', left - 1, right);
        }

        // 오른쪽 괄호를 추가할 수 있는 경우
        if (right > left) {
            backtrack(S + ')', left, right - 1);
        }
    }

    // 초기 호출
    backtrack("", n, n);

    return result;
};