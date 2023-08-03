/**
 * Example 4-9. Creating a WebSocket connection
 * From "Web Browser API Cookbook" by Joe Attardi
 */

// Open the WebSocket connection (the URL scheme should be ws: or wss:)
const socket = new WebSocket(url);

socket.addEventListener('open', onSocketOpened);
socket.addEventListener('message', handleMessage);
socket.addEventListener('error', handleError);
socket.addEventListener('close', onSocketClosed);

function onSocketOpened() {
  console.log('Socket ready for messages');
}

function handleMessage(event) {
  console.log('Received message:', event.data);
}

function handleError(event) {
  console.log('Socket error:', event);
}

function onSocketClosed() {
  console.log('Connection was closed');
}
