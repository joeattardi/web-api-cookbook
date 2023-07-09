// Open the WebSocket connection (the URL scheme should be ws: or wss:)
const socket = new WebSocket(url);

socket.addEventListener('open', onSocketOpened);
socket.addEventListener('message', handleMessage);
socket.addEventListener('error', handleError);
socket.addEventListener('close', onSocketClosed);

function onSocketOpened() {
  console.log('Socket ready for messages');

  // Messages are simple strings
  socket.send('Hello');

  // The socket needs the data as a string, so you can use
  // JSON.stringify to serialize objects to be sent
  socket.send(JSON.stringify({
    username: 'sysadmin',
    password: 'password'
  }));
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
