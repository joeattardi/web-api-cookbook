/**
 * Example 11-10. Rounding a number
 * From "Web Browser API Cookbook" by Joe Attardi
 */

function roundToTwoDecimalPlaces(number) {
  const format = new Intl.NumberFormat(navigator.language, {
    maximumFractionDigits: 2
  });

  return format.format(number);
}

// prints "5.49"
console.log(roundToTwoDecimalPlaces(5.49125));

// prints "5.5"
console.log(roundToTwoDecimalPlaces(5.49621));
