/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function(n, k) {
    const arr = new Array(n).fill(0);
    arr.map((i, idx) => {
        arr[idx] = idx+1
    })
    let x = 0;

    while(arr.length !== 1){
        x = (x+k-1)%arr.length;
        arr.splice(x, 1);
    }
    return arr[0];
};