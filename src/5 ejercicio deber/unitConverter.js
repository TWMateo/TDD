// unitConverter.js

class UnitConverter {
  static kilometersToMiles(kilometers) {
    return kilometers * 0.621371;
  }

  static milesToKilometers(miles) {
    return miles / 0.621371;
  }

  static celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }

  static fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
  }

  static litersToGallons(liters) {
    return liters * 0.264172;
  }

  static gallonsToLiters(gallons) {
    return gallons / 0.264172;
  }

  static kilogramsToPounds(kilograms) {
    return kilograms * 2.20462;
  }

  static poundsToKilograms(pounds) {
    return pounds / 2.20462;
  }
}

module.exports = UnitConverter;
