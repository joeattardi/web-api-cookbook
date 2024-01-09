/**
 * Example 11-7. Formatting a number in the default locale
 * From "Web Browser API Cookbook" by Joe Attardi
 */

// outputs '52,000.55' for en-US
console.log(
  new Intl.NumberFormat().format(5200.55)
);
