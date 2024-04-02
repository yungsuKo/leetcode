/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const dict = {};
    const visited = {};

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