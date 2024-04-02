/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const dict = {};
    const visited = {};
    // 일단 초기에 2가지 경우의 수를 고려해야함.
    // 첫번째로 이전에 검증한 내역에 존재하는 내역인지
    // 여기서 만약에 이전에 존재하는 내역이라면, 검증했던 문자와 동일해야함.
    // 만약 이전에 존재하지 않는 내역이라면, 동일한 문자가 존재하면 안됨.
    
    // 즉 A라는 세트와 B라는 세트가 있을 때,
    // dict에 A[0]이라는 자리값을 만들고 B[0]을 넣음.
    // 그리고 B[0]을 visited에 자리값으로 넣음.
    // dict에 A[n]이라는 자리값을 만들기 이전에 dict에 동일한 자리값이 존재하는지 확인.
    // dict에 동일한 자리값이 있다면, B[n]과 dict[A[n]]이 동일한지를 확인. 다르면 false임.
    // 만약 dict에 자리값이 없다면 B[n]은 visited에 이력이 있으면 안됨. 있으면 false임.
    
    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];

        if (dict[charS]) {
            if (dict[charS] !== charT) {
                return false;
            }
        } else {
            if (visited[charT]) {
                return false;
            }

            dict[charS] = charT;
            visited[charT] = true;
        }
    }

    return true;
};