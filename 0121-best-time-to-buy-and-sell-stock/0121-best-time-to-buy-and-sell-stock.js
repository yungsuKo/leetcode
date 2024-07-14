/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = prices[0];
    let max = prices[0];
    let result = 0;
    for(let price of prices){
        if(price < min){
            min = price;
            max = price;
        }
        if(max < price){
            max = price
        }
        result = Math.max(result, max-min)
    }
    return result;
};