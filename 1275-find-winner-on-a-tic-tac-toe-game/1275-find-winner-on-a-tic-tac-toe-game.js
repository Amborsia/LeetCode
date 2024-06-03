/**
 * @param {number[][]} moves
 * @return {string}
 */

var tictactoe = function (moves) {
    const winset = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    let game_board = new Array(9).fill(0);

    for (let i = 0; i < moves.length; i++) {
        const move = moves[i]
        if (i % 2 == 0) {
            game_board[move[0] * 3 + move[1]] = 'A';
        } else {
            game_board[move[0] * 3 + move[1]] = 'B';
        }
    }

    for (let win of winset) {
        if (game_board[win[0]] && game_board[win[0]] == game_board[win[1]] && game_board[win[1]] == game_board[win[2]]) {
            return game_board[win[0]];
        }
    }

    if (moves.length == 9) {
        return 'Draw';
    } else {
        return 'Pending';
    }
};
