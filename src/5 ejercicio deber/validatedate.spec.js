// validatedate.spec.js

const validateDate = require('./validatedate');

describe('validateDate', () => {
  // Test cases for valid dates
  it('should return true for valid date strings', () => {
    expect(validateDate('2024-01-01')).toBe(true);
    expect(validateDate('1999-12-31')).toBe(true);
    expect(validateDate('2000-02-29')).toBe(true); // Leap year
  });

  // Test cases for invalid dates
  it('should return false for invalid date strings', () => {
    expect(validateDate('2024-13-01')).toBe(false); // Invalid month
    expect(validateDate('1999-00-31')).toBe(false); // Invalid month
    expect(validateDate('1999-12-32')).toBe(false); // Invalid day
    expect(validateDate('abcd-ef-gh')).toBe(false); // Non-numeric characters
    expect(validateDate('')).toBe(false); // Empty string
    expect(validateDate('1999-2-3')).toBe(false); // Incorrect format
    expect(validateDate('1999-02-29')).toBe(false); // Non-leap year
    expect(validateDate('1900-02-29')).toBe(false); // Non-leap century
    expect(validateDate('2000-02-30')).toBe(false); // Invalid day for leap year
  });

  // Test cases for different separators and formats
  it('should return false for date strings with invalid separators', () => {
    expect(validateDate('2024/01/01')).toBe(false); // Slash as separator
    expect(validateDate('2024.01.01')).toBe(false); // Dot as separator
    expect(validateDate('2024_01_01')).toBe(false); // Underscore as separator
  });

  it('should return false for date strings with the wrong format', () => {
    expect(validateDate('01-01-2024')).toBe(false); // Wrong order
    expect(validateDate('01/01/2024')).toBe(false); // Wrong format and order
    expect(validateDate('2024-1-1')).toBe(false); // Missing leading zeros
  });

  // Test cases for valid and invalid times
  it('should return false for date strings with times', () => {
    expect(validateDate('2024-01-01T00:00:00')).toBe(false); // ISO datetime
    expect(validateDate('2024-01-01 00:00:00')).toBe(false); // Date with time
  });

  // Test cases for extreme and historical dates
  it('should return true for extreme and historical date strings', () => {
    expect(validateDate('9999-12-31')).toBe(true); // Far future date
    expect(validateDate('0001-01-01')).toBe(true); // Far past date
  });

  // Test cases for date strings with additional text
  it('should return false for date strings with additional text', () => {
    expect(validateDate('2024-01-01 some text')).toBe(false); // Date with trailing text
    expect(validateDate('some text 2024-01-01')).toBe(false); // Date with leading text
  });
});
