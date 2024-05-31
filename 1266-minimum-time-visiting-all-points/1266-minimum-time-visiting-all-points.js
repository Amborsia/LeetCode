/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function (points) {

let result = 0;
    let x = 0;
    let y = 0;
    for (let i = 0; i < points.length; i++) {
        x = Math.abs(points[i][0] - points[i + 1][0])
        y = Math.abs(points[i][1] - points[i + 1][1])
        result = Math.max(x,y)
    }

    return result;
};