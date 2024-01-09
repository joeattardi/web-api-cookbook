/**
 * Example 11-12. Formatting gigabytes
 * From "Web Browser API Cookbook" by Joe Attardi
 */

const format = new Intl.NumberFormat(navigator.language, {
  style: 'unit',
  unit: 'gigabyte'
});

// prints "1,000 GB"
console.log(format.format(1000));