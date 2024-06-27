/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    const [a, b] = edges[0]
    if(edges[1].includes(a)) {
        return a;
    } else {
        return b
    }
    
};