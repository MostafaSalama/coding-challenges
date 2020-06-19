const runningSum = require('./index') ; 
describe('testing running sum of 1d array', function () {
    it('should return the correct sum of the 1d array', function () {
        expect(runningSum([1,2,3,4])).toEqual([1,3,6,10]);
    });
});
