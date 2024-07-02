/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const resultArr = [];
    for(let i = 0; i<nums1.length; i++){
        for(let j=0; j<nums2.length; j++){
            if(nums1[i] == nums2[j] && nums1[i] !== '' && nums2[j] !== ''){
                resultArr.push(nums1[i])
                nums1[i] = ''
                nums2[j] = ''
            }
        }
        console.log(nums1, nums2)
    }
    return resultArr
};