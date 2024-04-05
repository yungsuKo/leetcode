/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    let sStr = s;
    let i = 0;
    while(i !== sStr.length){
        // 조건 다시 생각. 소문자이면 뒤에가 소문자인지
        if((sStr[i]===sStr[i].toLowerCase() && sStr[i].toUpperCase() === sStr[i+1]) 
           || (sStr[i].toUpperCase() === sStr[i] && sStr[i].toLowerCase() === sStr[i+1])){
            sStr = sStr.substring(0,i) + sStr.substring(i+2,)
            i = 0;
        }else{
            i++;
        }
    }
    return sStr
};