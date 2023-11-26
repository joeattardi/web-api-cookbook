/**
 * Example 14-2. Querying the Battery Status API
 * From "Web Browser API Cookbook" by Joe Attardi
 */

const batteryLevelItem = document.querySelector('#battery-level');
const batteryChargingItem = document.querySelector('#battery-charging');

navigator.getBattery().then(battery => {
  // Battery level is a number between 0 and 1. Multiply by 100 to convert it to
  // a percentage.
  batteryLevelItem.textContent = `${battery.level * 100}%`;

  batteryChargingItem.textContent = battery.charging ? 'Charging' : 'Not charging';
});
