/**
 * Example 4-7. Sending a beacon
 * From "Web Browser API Cookbook" by Joe Attardi
 */

const currentUser = {
  username: 'sysadmin'
};

// Some analytics data we want to capture
const data = {
  user: currentUser.username,
  lastVisited: new Date()
};

// Send the data before unload
document.addEventListener('visibilitychange', () => {
  // If the visibility state is 'hidden', that means the page just became hidden
  if (document.visibilityState === 'hidden') {
    navigator.sendBeacon('/api/analytics', data);
  }
});
