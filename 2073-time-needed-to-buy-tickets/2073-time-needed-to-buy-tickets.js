/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
    let ticketsArr = tickets;
    let count = 0;
    while(ticketsArr[k] !== 0){
        console.log(ticketsArr)
        for(let i = 0; i<ticketsArr.length; i++){
            if(ticketsArr[i] > 0){
                ticketsArr[i] = ticketsArr[i] - 1;
                count += 1;
                if(i===k && ticketsArr[k] === 0) break;
            }
        }
    }
    return count;
};