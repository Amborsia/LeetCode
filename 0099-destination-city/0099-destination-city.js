/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
    const map = new Map();
    for (let path of paths) {
        map.set(path[0], path[1]);
    }
    let start = paths[0][0];
    while (map.has(start)) {
        start = map.get(start);
    }
    return start;
};