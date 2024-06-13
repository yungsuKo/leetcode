/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function(seats, students) {
    seats.sort((a,b) => a-b);
    students.sort((a,b) => a-b);
    
    return seats.reduce((a,b,i) => Math.abs(b-students[i])+a, 0)
};