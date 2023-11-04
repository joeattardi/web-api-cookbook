/**
 * Example 11-11. Formatting a price range
 * From "Web Browser API Cookbook" by Joe Attardi
 */

function formatPriceRange(prices) {
  const format = new Intl.NumberFormat(navigator.language, { 
    style: 'currency',

    // the currency code is required when using `style: currency`
    currency: 'USD' 
  });
  return format.formatRange(
    // find the lowest price in the array
    Math.min(...prices),

    // find the highest price in the array
    Math.max(...prices)
  );
}

// outputs '$1.75 - $11.00'
console.log(
  formatPriceRange([5.5, 3, 1.75, 11, 9.5])
);
