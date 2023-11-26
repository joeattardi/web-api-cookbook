/**
 * Example 14-3. Listening for battery events
 * From "Web Browser API Cookbook" by Joe Attardi
 */

battery.addEventListener('levelchange', () => {
  batteryLevelItem.textContent = `${battery.level * 100}%`;
});

battery.addEventListener('chargingchange', () => {
  batteryChargingItem.textContent = battery.charging ? 'Charging' : 'Not charging';
});
