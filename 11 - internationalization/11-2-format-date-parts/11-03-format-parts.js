/**
 * Example 11-3. Getting the parts of a formatted date
 * From "Web Browser API Cookbook" by Joe Attardi
 */

const format = new Intl.DateTimeFormat(navigator.language, { dateStyle: 'short' });
const parts = format.formatToParts(new Date());
