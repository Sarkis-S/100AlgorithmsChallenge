function celsiusToFahrenheit(celsius: number): number {
  // Given formula from Celsius to Fahrenheit:
  // Temperature in Celsius * (9/5) + 32

  return celsius * (9/5) + 32;
}

console.log(celsiusToFahrenheit(-30)); // -22
console.log(celsiusToFahrenheit(-10)); // 14
console.log(celsiusToFahrenheit(0)); // 32