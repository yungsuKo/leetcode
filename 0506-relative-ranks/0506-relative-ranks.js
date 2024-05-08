/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    let sortedScore = [...score];
    sortedScore.sort((a, b) => b-a)
    
    let arr = {};
    sortedScore.map((sc, i) => {
        arr[sc] = i;
    })
    let result = [];
    for(let sc of score){
        if(arr[sc] == 0){
            result.push('Gold Medal')
        }else if(arr[sc] == 1){
            result.push('Silver Medal')
        }else if(arr[sc] == 2){
            result.push('Bronze Medal')
        }else{
            result.push(String(arr[sc]+1))
        }
    }
    return result
};