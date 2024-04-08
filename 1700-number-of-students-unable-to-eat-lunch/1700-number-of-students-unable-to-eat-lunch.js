/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    while(sandwiches.length!== 0){
        if(sandwiches[0] == students[0]){
            sandwiches.shift();
            students.shift();
        }else{
            const stuSum = students.reduce((sum, curr) => sum+curr,0);
            console.log(students, stuSum, students.length)
            if(stuSum === students.length || stuSum === 0){
                return students.length;
            }else{
                const back = students.shift();
                students.push(back);
            }
        }
    }
    return 0;
};