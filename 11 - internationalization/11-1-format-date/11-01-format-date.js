/**
 * Example 11-1. Formatting a date
 * From "Web Browser API Cookbook" by Joe Attardi
 */

const format = new Intl.DateTimeFormat(navigator.language, { dateStyle: 'long' });
const formattedDate = format.format(new Date());
