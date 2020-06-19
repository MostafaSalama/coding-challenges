/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
    const newArray = [];
    let preValue = nums[0];
    newArray.push(preValue);
    const numsLength = nums.length;
    for (let i = 1; i < numsLength; i++) {
        preValue = preValue + nums[i] ;
        newArray.push(preValue) ;
    }
    return newArray ;
};
