/**
 * @param {number} money
 * @param {number} children
 * @return {number}
 */
var distMoney = function(money, children) {
    if(money < children){
        return -1
    }
    if(children * 8 < money){
        return children - 1;
    }
    let leftMoney = money- children;
    let divide7 = Math.floor(leftMoney/7)
    let divideAfter = leftMoney % 7;
    if(divide7 == 0){
        return 0;
    }
    if(divideAfter == 3 && children - divide7 == 1){
        return divide7 - 1;
    }else {
        return divide7;
    }
};