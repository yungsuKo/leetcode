/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    const front = word.split('').slice(0, word.indexOf(ch)+1).reverse();
    const last = word.split('').slice(word.indexOf(ch)+1);
    return front.join('') + last.join('')
};