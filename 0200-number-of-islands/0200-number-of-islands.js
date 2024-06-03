/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const directions = [
        [-1, 0], [1, 0], [0, -1], [0, 1]
    ];

    function dfs(i, j) {
        if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] === '0') {
            return;
        }
        
        // 방문한 곳을 '0'으로 바꿔서 재방문하지 않도록 함
        grid[i][j] = '0';
        
        for (const [di, dj] of directions) {
            dfs(i + di, j + dj);
        }
    }

    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === '1') {
                count++;
                dfs(i, j);
            }
        }
    }
    
    return count;
};

// 예제 사용
console.log(numIslands([["1", "0", "1", "1", "0", "1", "1"]]));
