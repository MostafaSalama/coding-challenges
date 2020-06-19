/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
let shuffle = function (nums, n) {
    const shuffledArray = [];
    const length = nums.length;
    for (let i = 0; i < n; i++) {
        shuffledArray.push(nums[i]);
        shuffledArray.push(nums[n + i]);
    }
    return shuffledArray;
};

module.exports = shuffle ;
