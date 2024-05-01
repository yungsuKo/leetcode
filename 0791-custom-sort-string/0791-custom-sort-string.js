/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
    let sOrder = []
    
    for(let i = 0; i < s.length; i++){
        if(order.split('').includes(s[i])){
            sOrder.push([s[i], order.split('').indexOf(s[i])+1])
        }else {
            sOrder.push([s[i], 0]);
        }
    }

    sOrder.sort((a,b) => a[1] - b[1]);
    let ans = '';
    sOrder.forEach((i) => {
        console.log(i)
        ans+=i[0]
    });
    
    return ans
};