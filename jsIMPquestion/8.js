function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
    console.log(`${celsius}°C is ${fahrenheit.toFixed(2)}°F`);
  }
  
  function fahrenheitToCelsius(fahrenheit) {
    const celsius = (fahrenheit - 32) * 5/9;
    console.log(`${fahrenheit}°F is ${celsius.toFixed(2)}°C`);
  }
  
  
  celsiusToFahrenheit(30);
  fahrenheitToCelsius(86);