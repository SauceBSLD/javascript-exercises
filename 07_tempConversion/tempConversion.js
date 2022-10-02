const ftoc = function(tempFar) {
  newTemp = Math.round(((tempFar - 32) / 1.8) * 10) / 10;
  return newTemp;
};

const ctof = function(tempCel) {
  newTemp = Math.round(((tempCel * 1.8) + 32) * 10) / 10;
  return newTemp;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
