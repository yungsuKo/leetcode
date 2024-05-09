/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
var maximumHappinessSum = function(happiness, k) {
    happiness.sort((a,b) => a-b);
    let result = 0;
    let i = 0;
    while(k > 0){
        if(happiness[happiness.length - 1] < i) break;
        result += (happiness.pop()-i);
        k--;
        i++;
    }
    return result;
};