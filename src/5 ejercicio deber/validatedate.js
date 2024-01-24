// validatedate.js

function validateDate(dateString) {
	// Regex pattern to check if the date format is YYYY-MM-DD
	const pattern = /^\d{4}-\d{2}-\d{2}$/;
  
	// Check against the regex pattern
	if (!pattern.test(dateString)) {
	  return false;
	}
  
	// Parse the date components
	const [year, month, day] = dateString.split('-').map(Number);
  
	// Check if the year, month, and day are valid
	if (year < 1 || year > 9999 || month < 1 || month > 12) {
	  return false;
	}
  
	const monthLengths = [31, (isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
	if (day < 1 || day > monthLengths[month - 1]) {
	  return false;
	}
  
	return true;
  }
  
  function isLeapYear(year) {
	if (year % 4 !== 0) {
	  return false;
	} else if (year % 100 !== 0) {
	  return true;
	} else if (year % 400 !== 0) {
	  return false;
	}
	return true;
  }
  
  module.exports = validateDate;
  