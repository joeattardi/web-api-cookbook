/**
 * Example 11-1. Finding the offset and unit
 * From "Web Browser API Cookbook" by Joe Attardi
 */

function getDateDifference(fromDate) {
  const today = new Date();

  if (fromDate.getFullYear() !== today.getFullYear()) {
    return { offset: fromDate.getFullYear() - today.getFullYear(), unit: 'year' };
  } else if (fromDate.getMonth() !== today.getMonth()) {
    return { offset: fromDate.getMonth() - today.getMonth(), unit: 'month' };
  } else {
    // You could even go more granular down to hours, minutes, or seconds!
    return { offset: fromDate.getDate() - today.getDate(), unit: 'day' };
  }
}
