const numJewelsInStones = require('./index');

it('should return the correct output',()=>{
    expect(numJewelsInStones('z',"ZZ")).toBe(0) ;
    expect(numJewelsInStones('aA','Aaa')).toBe(3)
    expect(numJewelsInStones('aA','AaabbbbAbb')).toBe(4)
})
