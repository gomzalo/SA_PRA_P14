const sum = require('../calc/sum');

test('Test adds, 60 + 26 to equal 86', () => {
  expect(sum(60, 26)).toBe(86);
})