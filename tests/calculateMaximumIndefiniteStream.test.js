const calculateMaximumIndefiniteStream = require('../functions/calculateMaximumIndefiniteStream');

test('with 0% of damage the max indefinite stream is 100\n', () => {
  expect(calculateMaximumIndefiniteStream(0)).toBe(100);
});

test('with 40% of damage the max indefinite stream is 60\n', () => {
  expect(calculateMaximumIndefiniteStream(40)).toBe(60);
});

test('with 100% of damage the max indefinite stream is 0\n', () => {
  expect(calculateMaximumIndefiniteStream(100)).toBe(0);
});

test('with 101% of damage the max indefinite stream is -1\n', () => {
  expect(calculateMaximumIndefiniteStream(101)).toBe(0);
});

test('with -1% of damage the max indefinite stream is -1\n', () => {
  expect(calculateMaximumIndefiniteStream(-1)).toBe(0);
});
