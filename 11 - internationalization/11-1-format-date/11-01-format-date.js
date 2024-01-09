/**
 * Example 11-1. Formatting a date
 * From "Web Browser API Cookbook" by Joe Attardi
 */

const formatter = new Intl.DateTimeFormat(navigator.language, { dateStyle: 'long' });
const formattedDate = formatter.format(new Date());
