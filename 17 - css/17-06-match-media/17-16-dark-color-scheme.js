/**
 * Example 17-16. Checking for a dark color scheme
 * From "Web Browser API Cookbook" by Joe Attardi
 */

const isDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
