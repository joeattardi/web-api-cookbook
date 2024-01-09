/**
 * Example 11-14. A full plural rules solution
 * From "Web Browser API Cookbook" by Joe Attardi
 */

function formatUserCount(users) {
  // The variations of the message, depending
  // on the count.
  const messages = {
    one: 'There is 1 user.',
    other: `There are ${users.length} users.`
  };

  // Use Intl.PluralRules to determine which message
  // should be displayed.
  const rules = new Intl.PluralRules('en-US');
  return messages[rules.select(users.length)];
}
