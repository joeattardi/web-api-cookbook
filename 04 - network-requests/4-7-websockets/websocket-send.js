/**
 * Example 4-10. Sending WebSocket messages
 * From "Web Browser API Cookbook" by Joe Attardi
 */

// Messages are simple strings
socket.send('Hello');

// The socket needs the data as a string, so you can use
// JSON.stringify to serialize objects to be sent
socket.send(JSON.stringify({
  username: 'sysadmin',
  password: 'password'
}));
