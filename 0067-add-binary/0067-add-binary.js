/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    const arrA = a.split('').reverse().map((num) => Number(num));
    const arrB = b.split('').reverse().map((num) => Number(num));
    const newArr = [0];
    let length = arrA.length > arrB.length ? arrA.length : arrB.length;
    console.log(length)
    for(let i = 0; i<=length; i++){
        let num = (arrA[i]?arrA[i]:0) + (arrB[i]?arrB[i]:0) + newArr[i];
        console.log(arrA[i]?arrA[i]:0, arrB[i]?arrB[i]:0, num)
        if(num == 3){
            newArr[i] = 1;
            newArr.push(1);
        }else if(num == 2){
            newArr[i] = 0;
            newArr.push(1);
        }else if(num == 1){
            newArr[i] = 1;
            newArr.push(0);
        }else if(num == 0){
            newArr[i] = 0;
            newArr.push(0);
        }
    }
    newArr.reverse()
    while(newArr[0] == 0){
        newArr.shift();
    }
    return newArr.length === 0 ? "0" : newArr.join('')
}