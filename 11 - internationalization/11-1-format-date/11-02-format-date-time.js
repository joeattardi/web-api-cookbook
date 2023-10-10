/**
 * Example 11-2. Formatting a date and time
 * From "Web Browser API Cookbook" by Joe Attardi
 */

const format = new Intl.DateTimeFormat(navigator.language, { dateStyle: 'long', timeStyle: 'long' });
const formattedDateAndTime = format.format(new Date());
