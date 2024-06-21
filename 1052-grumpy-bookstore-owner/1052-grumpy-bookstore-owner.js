/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, minutes) {
//     get Max index
    let maxVal = 0;
    let maxIdx = 0;
    for(let i = 0; i<customers.length-minutes+1; i++){
        let curr = 0;
        for(let j = i; j < i+minutes; j++){
            curr += customers[j]*grumpy[j]
        }
        if(maxVal < curr){
            maxVal = curr;
            maxIdx = i;
        }
    }
    
    for(let i=maxIdx; i < maxIdx+minutes; i++){
        grumpy[i] = 0;
    }
    
    return customers.reduce(
        (accumulator, currentValue, i) => {
            if(grumpy[i]==0) {
                return (accumulator + currentValue)
            }
            return accumulator
        },
        0,
    );
//     let maxSatisfied = 0;
//     for(let i = 0; i<customers.length - minutes + 1; i++){
//         const tempGrump = [...grumpy];
//         for(let k = 0; k<minutes; k++){
//             tempGrump[k+i] = 0;
//         }
        
//         const curr = customers.reduce(
//             (accumulator, currentValue, j) => {
//                 if(tempGrump[j]==0) {
//                     return (accumulator + currentValue)
//                 }
//                 return accumulator
//             },
//             0,
//         );
        
//         maxSatisfied = Math.max(maxSatisfied, curr)
//     }
//     return maxSatisfied
};