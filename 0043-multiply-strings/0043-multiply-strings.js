/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if(num1 == 0 || num2 == 0) return "0";
    
    let firstNum = [...num1].reverse()
    let secondNum = [...num2].reverse()
    
    let N = firstNum.length + secondNum.length;
    let answer = new Array(N).fill(0);
    
    for(let p2 = 0; p2<secondNum.length; p2 ++){
        let digit2 = Number(secondNum[p2]);
        for(let p1 = 0; p1<firstNum.length; p1 ++){
            let digit1 = Number(firstNum[p1]);
            let currentPos = p1 + p2;
            let carry = answer[currentPos];
            let multiply = digit1*digit2 + carry;
            answer[currentPos] = multiply % 10;
            answer[currentPos + 1] += Math.floor(multiply/10);
        }
    }
    answer.reverse();
    if(answer[0] == 0){
        answer.shift();
    }
    return answer.join('')
};