const kidsWithCandies = require('./index');
test('show the correct output of the function', () => {
	expect(kidsWithCandies([2, 3, 5, 1, 3], 3)).toEqual([
		true,
		true,
		true,
		false,
		true,
	]);
});
