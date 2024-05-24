/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
    const splitTitle = title.split(' ').map((split) => {
        if(split.length <= 2){
            return split.toLowerCase();
        }else{
            return split.slice(0,1).toUpperCase() + split.slice(1).toLowerCase()
        }
    });
    return splitTitle.join(' ')
};