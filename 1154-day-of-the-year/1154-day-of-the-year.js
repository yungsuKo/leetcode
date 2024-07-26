/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
    let start = new Date(date.substr(0, 4));
    let end = new Date(date);
    let dayCount = 0

    while (end >= start) {
        dayCount++
        start.setDate(start.getDate() + 1)
    }

    return dayCount
};