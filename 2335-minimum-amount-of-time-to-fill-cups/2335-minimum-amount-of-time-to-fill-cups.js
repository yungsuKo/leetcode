/**
 * @param {number[]} amount
 * @return {number}
 */
var fillCups = function(amount) {
    let cnt = 0;
    while(amount.reduce((accumulator, currentValue) => accumulator + currentValue,
  0,) !== 0){
        amount.sort((a,b) => b-a);

        for(let i = 0; i< amount.length-1; i++){
            if(amount[i] !== 0){
                amount[i] = amount[i] - 1;
            }
        }
        cnt ++;
    }
    return cnt
};