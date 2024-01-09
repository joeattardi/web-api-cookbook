/**
 * Example 11-8. Formatting a number in the de-DE locale
 * From "Web Browser API Cookbook" by Joe Attardi
 */

// outputs '52.000,55'
console.log(
  new Intl.NumberFormat('de-DE').format(5200.55)
);
