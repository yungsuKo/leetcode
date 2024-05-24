/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
    const splitTitle = title.split(' ');
    let i = 0;
    for(let split of splitTitle){
        if(split.length <= 2){
            splitTitle[i]=split.toLowerCase();
        }else{
            splitTitle[i]=split.slice(0,1).toUpperCase() + split.slice(1).toLowerCase()
        }
        i++;
    }
    return splitTitle.join(' ')
};