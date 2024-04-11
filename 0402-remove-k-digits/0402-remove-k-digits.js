/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    var stack = [];
    for(let c of num) {
        while (stack.length && k>0 && stack [stack.length-1] > c) {
            stack.pop()
            k--
        }
        stack.push(c)
    }
    while (stack.length && k>0){
        stack.pop()
        k--
    }
    while(stack.length && stack [0] == '0'){
        stack.shift();
    }
    console.log(stack)
    return stack.join('') || "0"
    // const stack = [];
    // for(c of num){
    //     // 만약 기존에 있던 숫자가 추가되는 숫자모다 큰 경우 기존에 있던 것을 뽑아낸다.
    //     // 근데 뽑아내기 이전에 추가되었던 이력이 존재하는지, 남은 추출 횟수가 존재하는지 등을 평가한다.
    //     if(k>0 && stack.length > 0 && stack[stack.length - 1] > c){
    //         stack.pop();
    //         k--;
    //     }
    //     stack.push(c);
    // }
    // while(k > 0 && stack.length){
    //     if(stack.length == 2 && stack[stack.length-1] == '0'){
    //         stack.shift();    
    //     }else{
    //         stack.pop();    
    //     }
    //     console.log(stack)
    //     k--;
    // }
    // while(stack.length && stack[0] == '0'){
    //     stack.shift();
    // }
    // return stack.join('') || "0"
};