const convertToCelsius = function(fahrenheit) {
  celsius = Math.round(((fahrenheit - 32) / 1.8) * 10) / 10;
  return celsius;
};

const convertToFahrenheit = function(celsius) {
  fahrenheit = Math.round(((celsius * 1.8) + 32) * 10) / 10;
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
