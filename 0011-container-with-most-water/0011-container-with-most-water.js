/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let maxSize = 0;
    
    while(left < right){
        let h = Math.min(height[left], height[right]);
        let w = right - left;
        let size = h*w;
        maxSize = Math.max(maxSize, size);
        if(height[left] > height[right]){
            right --;
        }else{
            left ++;
        }
    }
    
    
    return maxSize
};