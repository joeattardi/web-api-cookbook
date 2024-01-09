/**
 * Example 11-9. Formatting a range of numbers
 * From "Web Browser API Cookbook" by Joe Attardi
 */

// outputs '1,000-5,000' for en-US
console.log(
  new Intl.NumberFormat().formatRange(1000, 5000)
);