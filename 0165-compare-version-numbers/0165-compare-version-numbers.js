/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    let version1Arr = version1.split('.').map((num) => Number(num))
    let version2Arr = version2.split('.').map((num) => Number(num))
    
    let i = 0;
    while(version1Arr[i]!==undefined || version2Arr[i]!==undefined){
        console.log(i, version1Arr[i], version2Arr[i])
        let ver1 = version1Arr[i] ? version1Arr[i] : 0;
        let ver2 = version2Arr[i] ? version2Arr[i] : 0;
        if(ver1 > ver2) return 1;
        if(ver1 < ver2) return -1;
        i++;
    }
    return 0;
};