// unitConverter.spec.js

const UnitConverter = require('./unitConverter');

describe('UnitConverter', () => {
  
  describe('Distance conversion', () => {
    it('converts kilometers to miles', () => {
      expect(UnitConverter.kilometersToMiles(1)).toBeCloseTo(0.621371);
    });

    it('converts miles to kilometers', () => {
      expect(UnitConverter.milesToKilometers(1)).toBeCloseTo(1.60934);
    });
  });

  describe('Temperature conversion', () => {
    it('converts celsius to fahrenheit', () => {
      expect(UnitConverter.celsiusToFahrenheit(0)).toBe(32);
    });

    it('converts fahrenheit to celsius', () => {
      expect(UnitConverter.fahrenheitToCelsius(32)).toBe(0);
    });
  });

  describe('Volume conversion', () => {
    it('converts liters to gallons', () => {
      expect(UnitConverter.litersToGallons(1)).toBeCloseTo(0.264172);
    });

    it('converts gallons to liters', () => {
      expect(UnitConverter.gallonsToLiters(1)).toBeCloseTo(3.78541);
    });
  });

  describe('Mass conversion', () => {
    it('converts kilograms to pounds', () => {
      expect(UnitConverter.kilogramsToPounds(1)).toBeCloseTo(2.20462);
    });

    it('converts pounds to kilograms', () => {
      expect(UnitConverter.poundsToKilograms(1)).toBeCloseTo(0.453592);
    });
  });

  // Más pruebas pueden ser añadidas aquí si se agregan más conversiones
});
