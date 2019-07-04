const calculateMaximunSpeedPercentage = require('../functions/calculateMaximumSpeedPercentage');

test('with injector a, b and c damage of 0% and speed of light of 100%', () => {
  expect(calculateMaximunSpeedPercentage([0, 0, 0])).toBe(100);
});

test('with injector a damage of 20%, b of 10% and c of 0% and speed of light of 100%', () => {
  expect(calculateMaximunSpeedPercentage([20, 10, 0])).toBe(90);
});

test('with injector a damage of 0%, b of 0% and c of 100% and speed of light of 100%', () => {
  expect(calculateMaximunSpeedPercentage([0, 0, 100])).toBe(200/3);
});

test('with injector a damage of 0%, b of 0% and c of 30% and speed of light of 140%', () => {
  expect(calculateMaximunSpeedPercentage([0, 0, 30])).toBe(90);
});

test('with injector a damage of 20%, b of 50% and c of 40% and speed of light of 170%', () => {
  expect(calculateMaximunSpeedPercentage([20, 50, 40])).toBe(190/3);
});

test('with whatever injector percentage damage and speed of light greater than 199%', () => {
  expect(calculateMaximunSpeedPercentage([101, 200, 3000])).toBe(0);
});

test('with injector a damage of 100%, b of 100% and c of 0% and speed of light of 30%', () => {
  expect(calculateMaximunSpeedPercentage([100, 100, 0])).toBe(100/3);
});

test('with injector a damage of 100%, b of 100% and c of 0% and speed of light of 30%', () => {
  expect(calculateMaximunSpeedPercentage([])).toBe(0);
});
