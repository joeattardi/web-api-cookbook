/**
 * Example 11-2. Formatting a date and time
 * From "Web Browser API Cookbook" by Joe Attardi
 */

const formatter = new Intl.DateTimeFormat(navigator.language, { dateStyle: 'long', timeStyle: 'long' });
const formattedDateAndTime = formatter.format(new Date());
