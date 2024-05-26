/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let left = 0;
    let right = s.split("").length - 1;
    let deleteCnt = 0;
    while(left < right){
        if (s[left] !== s[right]) return isTruePalindrome(s, left + 1, right) || isTruePalindrome(s, left, right - 1);
        left++;
        right --;
        
    }
    return true;
};

const isTruePalindrome = function(s, left, right) {
  while (left < right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }
  
  return true;
}