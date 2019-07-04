const calculateOperatingInjectorStream = require('../functions/calculateOperatingInjectorStream');

test('with injector a, b and c damage of 0% and speed of light of 100%', () => {
  expect(calculateOperatingInjectorStream([0, 0, 0], 100)).toEqual({
    streams: [100, 100, 100],
    operatingTime: 'Infinite',
    maximumSpeedPercentage: 100
  });
});

test('with injector a, b and c damage of 0% and speed of light of 90%', () => {
  expect(calculateOperatingInjectorStream([0, 0, 0], 90)).toEqual({
    streams: [90, 90, 90],
    operatingTime: 'Infinite',
    maximumSpeedPercentage: 100
  });
});

test('with injector a, b and c damage of 0% and speed of light of 30%', () => {
  expect(calculateOperatingInjectorStream([0, 0, 0], 30)).toEqual({
    streams: [30, 30, 30],
    operatingTime: 'Infinite',
    maximumSpeedPercentage: 100
  });
});

test('with injector a damage of 20%, b of 10% and c of 0% and speed of light of 100%', () => {
  expect(calculateOperatingInjectorStream([20, 10, 0], 100)).toEqual({
    streams: [90, 100, 110],
    operatingTime: 90,
    maximumSpeedPercentage: 90
  });
});

test('with injector a damage of 0%, b of 0% and c of 100% and speed of light of 100%', () => {
  expect(calculateOperatingInjectorStream([0, 0, 100], 80)).toEqual({
    streams: [120, 120, 0],
    operatingTime: 80,
    maximumSpeedPercentage: 200/3
  });
});

test('with injector a, b and c damage of 0% and speed of light of 150%', () => {
  expect(calculateOperatingInjectorStream([0, 0, 0], 150)).toEqual({
    streams: [150, 150, 150],
    operatingTime: 50,
    maximumSpeedPercentage: 100
  });
});

test('with injector a damage of 0%, b of 0% and c of 30% and speed of light of 140%', () => {
  expect(calculateOperatingInjectorStream([0, 0, 30], 140)).toEqual({
    streams: [150, 150, 120],
    operatingTime: 50,
    maximumSpeedPercentage: 90
  });
});

test('with injector a damage of 20%, b of 50% and c of 40% and speed of light of 170%', () => {
  expect(calculateOperatingInjectorStream([20, 50, 40], 170)).toMatch(/Unable to comply/);
});

test('with whatever injector percentage damage and speed of light greater than 199%', () => {
  expect(calculateOperatingInjectorStream([101, 200, 3000], 410)).toMatch(/Unable to comply/);
});

test('with injector a damage of 100%, b of 100% and c of 0% and speed of light of 30%', () => {
  expect(calculateOperatingInjectorStream([100, 100, 0], 30)).toEqual({
    streams: [0, 0, 90],
    operatingTime: 'Infinite',
    maximumSpeedPercentage: 100/3
  });
});

test('with injector a damage of 100%, b of 100% and c of 0% and speed of light of 30%', () => {
  expect(calculateOperatingInjectorStream([100, 100, 100], 0)).toEqual({
    streams: [0, 0, 0],
    operatingTime: 'Infinite',
    maximumSpeedPercentage: 0
  });
});

test('with injector a damage of 100%, b of 100% and c of 0% and speed of light of 30%', () => {
  expect(calculateOperatingInjectorStream([0, 0, 0], 0)).toEqual({
    streams: [0, 0, 0],
    operatingTime: 'Infinite',
    maximumSpeedPercentage: 100
  });
});

test('with injector a damage of 100%, b of 100% and c of 0% and speed of light of 30%', () => {
  expect(calculateOperatingInjectorStream([99, 99, 0], 1)).toEqual({
    streams: [1, 1, 1],
    operatingTime: 1,
    maximumSpeedPercentage: 102
  });
});
