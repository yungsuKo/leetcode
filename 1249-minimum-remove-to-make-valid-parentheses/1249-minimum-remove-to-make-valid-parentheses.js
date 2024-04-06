/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    let open = 0;
    let close= 0;
    let flag = 0;
    
    for(let i = 0; i<s.length; i++){
        if(s[i] === '('){
            open ++;
            flag ++;
        }else if(s[i] === ')' && flag > 0){
            close ++;
            flag --;
        }
    }
    
    let k = Math.min(open, close);
    open = k;
    close = k;
    let ans = '';
    for(let i = 0; i<s.length; i++){
        if(s[i] === '('){
            if(open>0 && close>=open){
                open--;
                ans += s[i];
            }
            continue;
        }
        if(s[i] === ')'){
            if(open < close){
                close--;
                ans += s[i]    
            }
            continue;
        }else{
            ans += s[i]
        }
        
    }
    return ans
};