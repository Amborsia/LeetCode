/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {

    let visited = Array.from({ length: grid.length }, () => Array(grid[0].length).fill(0));
    console.log(visited)
    function dfs(grid, i, j) {
        if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] == '0' || visited[i][j] == 1) {
            return;
        }
        visited[i][j] = 1;
        dfs(grid, i - 1, j);
        dfs(grid, i + 1, j);
        dfs(grid, i, j - 1);
        dfs(grid, i, j + 1);
    }
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == '1' && visited[i][j] == 0) {
                dfs(grid, i, j);
                count++;
            }
        }
    }
    return count;

    console.log(visited)
};

console.log(numIslands([["1", "0", "1", "1", "0", "1", "1"]]));


