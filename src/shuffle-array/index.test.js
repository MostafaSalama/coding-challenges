const shuffle = require('./index') ;

test('should return the correct output of shuffle function',()=>{
    expect(shuffle([1,2,3,4,5,6],3)).toEqual([1,4,2,5,3,6]);
})
