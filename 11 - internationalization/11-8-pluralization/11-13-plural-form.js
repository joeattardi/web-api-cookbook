/**
 * Example 11-13. Determining the plural form
 * From "Web Browser API Cookbook" by Joe Attardi
 */

// An array containing the users
const users = getUsers();

const rules = new Intl.PluralRules('en-US');
const form = rules.select(users.length);
