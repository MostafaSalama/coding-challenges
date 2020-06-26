/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
let numJewelsInStones = function(J, S) {
        let jewelsCount = 0 ;
        for(let j of J) {
            for (let s of S) {
                if (j === s) {
                    jewelsCount +=1
                }
            }
        }
        return   jewelsCount ;
};
module.exports = numJewelsInStones ;
