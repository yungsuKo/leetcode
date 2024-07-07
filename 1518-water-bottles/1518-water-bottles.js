/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    let exchange = numBottles;
    let res = numBottles;
    while(exchange >= numExchange){
        res += Math.floor(exchange/numExchange)
        exchange = Math.floor(exchange/numExchange) + exchange%numExchange
    }
    return res
};