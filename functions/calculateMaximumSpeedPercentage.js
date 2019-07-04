const calculateMaximumIndefiniteStream = require('./calculateMaximumIndefiniteStream');

let calculateMaximumSpeedPercentage = damagePercentages => {
  const numberOfInjectors = damagePercentages.length;
  if (numberOfInjectors > 0) {
    let maximunIndefiniteStreams = [];
    damagePercentages.forEach(damagePercentage => {
      maximunIndefiniteStreams.push(calculateMaximumIndefiniteStream(damagePercentage));
    });
    const sumOfStreams = maximunIndefiniteStreams.reduce((a, b) => a + b);
    return sumOfStreams / numberOfInjectors;
  } else return 0;
};

module.exports = calculateMaximumSpeedPercentage;
