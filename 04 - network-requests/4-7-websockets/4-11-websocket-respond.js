/**
 * Example 4-11. Responding to a WebSocket message
 * From "Web Browser API Cookbook" by Joe Attardi
 */

socket.addEventListener('message', event => {
  socket.send('ACKNOWLEDGED');
});
