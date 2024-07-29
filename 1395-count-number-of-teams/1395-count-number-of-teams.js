/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function(rating) {
    let result = 0;
    for(let i = 1; i < rating.length-1; i++){
        let leftBigger = 0;
        let leftSmaller = 0;
        let rightBigger = 0;
        let rightSmaller = 0;
        for(let j = 0; j<i; j++){
            rating[i] > rating[j] ? leftSmaller+=1:leftBigger+=1
        }
        for(let j = i+1; j<rating.length; j++){
            rating[i] > rating[j] ? rightSmaller+=1:rightBigger+=1
        }
        result += leftSmaller*rightBigger + leftBigger*rightSmaller;
    }
    return result
};