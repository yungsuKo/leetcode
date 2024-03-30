/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var str;
    
    if(x<0){
        str = -Number(String(-x).split('').reverse().join(''))
        console.log(-str,-(2**31))
        if(str>=-(2**31) ){
            return str;
        }else{
            return 0;
        }

    }else {
        str = Number(String(x).split('').reverse().join(''))
        console.log(str, (2**31)-1)
        if(str<=(2**31)-1){
            return str;
        }else{
            return 0;
        } 
    }
    
    
};