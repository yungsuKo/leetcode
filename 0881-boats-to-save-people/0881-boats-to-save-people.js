/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    let result = 0, l = 0, r=people.length-1;
    people.sort((a,b) => a-b);
    while(l<=r){
        if(people[l]+people[r] <= limit){
            l++;
            
        }
        result ++;
        r--;
    }
    return result
};