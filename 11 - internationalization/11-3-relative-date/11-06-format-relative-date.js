/**
 * Example 11-6. Formatting the relative date
 * From "Web Browser API Cookbook" by Joe Attardi
 */

function getRelativeDate(fromDate) {
  const { offset, unit } = getDateDifference(fromDate);
  const format = new Intl.RelativeTimeFormat();
  return format.format(offset, unit);
}
