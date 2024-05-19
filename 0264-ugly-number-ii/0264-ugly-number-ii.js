/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    let prod_2=0, prod_3=0, prod_5 = 0;
    const ans = [1];
    for(let i = 1; i<n; i++){
        let a = ans[prod_2]*2
        let b = ans[prod_3]*3
        let c = ans[prod_5]*5
        let m = Math.min(a,b,c)
        ans.push(m)
        if (m==a) prod_2+=1
        if (m==b) prod_3+=1
        if (m==c) prod_5+=1
    }
    console.log(ans)
    return ans[ans.length - 1]
};