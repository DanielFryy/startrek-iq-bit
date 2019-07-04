let calculateMaximumIndefiniteStream = percentageOfDamage => {
  if (percentageOfDamage >= 0 && percentageOfDamage <= 100) {
    let maximunIndefiniteStream = 100;
    maximunIndefiniteStream -= percentageOfDamage;
    return maximunIndefiniteStream;
  } else return 0;
};

module.exports = calculateMaximumIndefiniteStream;
