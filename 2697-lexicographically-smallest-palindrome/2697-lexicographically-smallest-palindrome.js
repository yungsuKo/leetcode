/**
 * @param {string} s
 * @return {string}
 */
var makeSmallestPalindrome = function(s) {
    const len = s.length;
    const arr = s.split('');
    const mid = Math.floor(len/2);
    if(len == 1){
       return s;
   }else if(len%2 == 1){
        let left=mid-1;
        let right=mid+1;
        while(left >= 0){
            if(arr[left] > arr[right]){
                arr[left] = arr[right];
            }else if(arr[left] < arr[right]){
                arr[right] = arr[left];
            }
            left--;
            right++;
        }
       return arr.join('');
    }else {
        let left=mid-1;
        let right=mid;
        while(left >= 0){
            if(arr[left] > arr[right]){
                arr[left] = arr[right];
            }else if(arr[left] < arr[right]){
                arr[right] = arr[left];
            }
            left--;
            right++;
        }
        return arr.join('');
    }
};