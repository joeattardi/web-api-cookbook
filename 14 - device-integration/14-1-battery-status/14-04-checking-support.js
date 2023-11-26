/**
 * Example 14-4. Checking for Battery Status API support
 * From "Web Browser API Cookbook" by Joe Attardi
 */

if ('getBattery' in navigator) {
  // request the battery status here
} else {
  // it's not supported
}
