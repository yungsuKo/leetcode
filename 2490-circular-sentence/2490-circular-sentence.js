/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function(sentence) {
    const arr = sentence.split(" ");

    if(arr[0][0] !== arr[arr.length -1][arr[arr.length -1].length -1]) return false
    
    for(let i =1; i<arr.length; i++){
        if(arr[i-1][arr[i-1].length-1] !== arr[i][0]) return false
    }
    return true
};