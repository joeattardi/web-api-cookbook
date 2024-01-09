/**
 * Example 11-17. Sorting an array of names with Intl.Collator
 * From "Web Browser API Cookbook" by Joe Attardi
 */

const names = [
  'Elena',
  'Mário',
  'André',
  'Renée',
  'Léo',
  'Olga',
  'Héctor',
]

const collator = new Intl.Collator();
names.sort(collator.compare);
