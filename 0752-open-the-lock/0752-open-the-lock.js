/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
    // 일단 0 -> 9, 9->0 자유롭게 이동할 수 있으니, 최소인 방향으로 이동할 수 있어야함.
    // 한자리씩 맞추되 list내 어떤 값과 동일하면 다른 자릿수를 변경함
    // BFS
    const dead = new Set(deadends);
    const queue = [['0000', 0]];
    const seen = new Set(['0000']);
    
    for(let [curr, turns] of queue){
        if(dead.has(curr)) continue;
        if(curr === target) return turns;
           
        for(let next of getNextState(curr)){
            if(seen.has(next)) continue;
            seen.add(next);
            queue.push([next, turns+1])
        }
    }
    
    return -1;
};

function getNextState(s) {
    const ans = [];
    for(let i = 0; i<s.length; i++){
        ans.push(s.slice(0,i) + ((+s[i]+1)%10).toString() + s.slice(i+1))
        ans.push(s.slice(0,i) + ((+s[i]+9)%10).toString() + s.slice(i+1))
    }
    return ans;
}