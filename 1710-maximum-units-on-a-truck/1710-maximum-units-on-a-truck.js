/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    boxTypes.sort((a,b) => b[1] - a[1])
    let result = 0
    for(let box of boxTypes){
        if(box[0] > truckSize){
            result += truckSize*box[1]
            truckSize = 0;
            break;
        }else{
            result += box[0]*box[1]
            truckSize -= box[0]
        }
    }
    return result
};