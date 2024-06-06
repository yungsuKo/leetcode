/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function(hand, groupSize) {
    // const groupNum = hand.length / groupSize;
    // if (hand.length === 1) return true;
    // if (hand.length % groupSize !== 0) return false;
    // for(let j = 0; j < groupNum; j++) {
    //     let min = Math.min(...hand);
    //     for(let i = 0; i < groupSize; i++) {
    //         let index = hand.indexOf(min + i);
    //         if(index === -1) return false;
    //         hand.splice(index, 1);
    //     }
    // }
    // return true;
    
    if (hand.length % groupSize !== 0) return false;
    const count = {};
    for(let item of hand){
        if(!count[item]){
            count[item] = 1
        }else{
            count[item] = count[item]+1;
        }
    }
    
    hand.sort((a,b) => a-b);
    
    for(let item of hand){
        if(count[item] == 0){
            continue;
        }
        for(let i = 0; i<groupSize; i++){
            const num = item+i;
            if(count[num] == undefined || count[num] == 0){
                return false;
            }
            count[num] = count[num] - 1
        }
    }
    return true
};