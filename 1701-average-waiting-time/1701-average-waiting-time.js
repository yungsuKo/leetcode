/**
 * @param {number[][]} customers
 * @return {number}
 */
var averageWaitingTime = function(customers) {
    let nowTime = 0;
    let waitTime = [];
    customers.map((customer) => {
        if(nowTime <= customer[0]){
            waitTime.push(customer[1])
            nowTime = customer[0] + customer[1]
            
        }else{
            waitTime.push(nowTime-customer[0]+customer[1]);
            nowTime = nowTime + customer[1]
        }
    })
    
    return waitTime.reduce(
        (accumulator, currentValue) => accumulator + currentValue, 0
    )/waitTime.length;
};