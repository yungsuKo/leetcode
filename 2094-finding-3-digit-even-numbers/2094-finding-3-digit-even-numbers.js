/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function(digits) {
//     짝수를 우선 뽑아내어 배열을 만든다.
//     위에서 나온 짝수 배열으로 for문을 돌린다.
//     배열에서 사용된 짝수를 제외하고 가능한 경우의 수를 추가한다.
    digits.sort((a,b) => a-b);
    let map = new Map();
    for(let i = 0; i<digits.length; i++){
        for(let j = 0; j<digits.length; j++){
            for(let k = 0; k<digits.length; k++){
                if(i!==j && j!==k && i!==k){
                    if(digits[k]%2 == 0 && digits[i]!==0){
                        map.set(Number([digits[i],digits[j],digits[k]].join('')))
                    }
                }
            }
        }
    }
    return [...map.keys()]
};