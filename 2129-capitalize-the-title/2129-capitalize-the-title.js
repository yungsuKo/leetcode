/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
    const splitTitle = title.split(' ');
    let i = 0;
    for(let split of splitTitle){
        if(split.length <= 2){
            splitTitle[i]=split.split('').map((c, j) => {
                return c.toLowerCase()
            }).join('');
        }else{
            splitTitle[i]=split.split('').map((c, j) => {
                if(j == 0) {return c.toUpperCase()}
                else {return c.toLowerCase()}
            }).join('');
        }
        i++;
    }
    return splitTitle.join(' ')
};