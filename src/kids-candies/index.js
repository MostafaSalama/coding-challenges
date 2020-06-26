/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
let kidsWithCandies = function (candies, extraCandies) {
    let maxValue = candies[0];
    candies.forEach((value) => {
        if (value > maxValue) maxValue = value;
    });
    const output = [];
    for (let candy of candies) {
        const isEnough = maxValue - candy <= extraCandies;
        output.push(isEnough);
    }
    return output;
};

module.exports = kidsWithCandies ;
