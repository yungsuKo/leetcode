/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const T = "#"+s.split('').join('#')+"#";
    const Arr = new Array(T.length).fill(0);
    
    for(let i = 0; i < Arr.length; i++){
        for(let j = 0; j < i; j++){
            if(T[i-j]===T[i+j]){
                Arr[i]++;
            }else{
                break;
            }
        }
    }
    
    const maxNum = Math.max(...Arr);
    const indexMaxNum = Arr.indexOf(Math.max(...Arr));
    if(T[indexMaxNum] === '#'){
        return T.substr(indexMaxNum-(maxNum-1),2*maxNum-1).split('#').join('')
    }else{
        console.log(T.substr(indexMaxNum-(maxNum-1),maxNum*2-1))
        return T.substr(indexMaxNum-(maxNum-1),maxNum*2-1).split('#').join('')
    }
    
    
    // return s[0]

};