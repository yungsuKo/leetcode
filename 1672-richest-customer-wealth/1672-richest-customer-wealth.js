/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    const wealth = accounts.map((arr) => arr.reduce((accumulator, currentValue) => accumulator + currentValue,
                                                    0,))
    return Math.max(...wealth)
};