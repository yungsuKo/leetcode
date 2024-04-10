/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function(deck) {
    const sortedDeck = deck.sort((a,b) => a-b);
    
    const newArr = [];
    while(sortedDeck.length !== 0){
        if(newArr.length !== 0){
            newArr.unshift(newArr.pop());
            newArr.unshift(sortedDeck.pop());    
        }else{
            newArr.push(sortedDeck.pop());
        }
    }
    return newArr;
};