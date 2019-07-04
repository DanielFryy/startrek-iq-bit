const calculateOperatingInjectorStream = require('./functions/calculateOperatingInjectorStream');
const calculateMaximunSpeedPercentage = require('./functions/calculateMaximumSpeedPercentage');

let getRandomInt = max => {
  return Math.floor(Math.random() * Math.floor(max + 1));
};

// Generating data to test
let randomNumberOfInjectors = getRandomInt(9);
let randomInjectorDamagePercentages = [];

for (let i = 0; i < randomNumberOfInjectors; i++) {
  randomInjectorDamagePercentages.push(getRandomInt(100));
}
const randomSpeedOfLightPercentage = getRandomInt(199);

// Showing generated data
console.log('number of injectors:', randomNumberOfInjectors);
randomInjectorDamagePercentages.forEach((randomInjectorDamagePercentage, index) => {
  console.log(index + 1, 'injector damage:', randomInjectorDamagePercentage + '%');
});
console.log('Required speed of light percentage:', randomSpeedOfLightPercentage + '%');

// Showing results
console.log('Maximum speed of light percentage:', calculateMaximunSpeedPercentage(randomInjectorDamagePercentages) + '%');
console.log('Result:', calculateOperatingInjectorStream(randomInjectorDamagePercentages, randomSpeedOfLightPercentage));

let test = [67, 10, 39, 69, 100, 0, 10, 27];
let speed = 18;

console.log('Maximum speed of light percentage:', calculateMaximunSpeedPercentage(test) + '%');
console.log('Result:', calculateOperatingInjectorStream(test, speed));
