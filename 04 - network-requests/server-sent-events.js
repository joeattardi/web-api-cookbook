const events = new EventSource('https://example.com/events');

// Fired once connected
events.addEventListener('open', () => {
  console.log('Connection is open');
});

// Fired if a connection error occurs
events.addEventListener('error', event => {
  console.log('An error occurred:', event);
});

// Fired when receiving an event with a type of "heartbeat"
events.addEventListener('heartbeat', event => {
  console.log('got heartbeat:', event.data);
});

// Fired when receiving an event with a type of "notice"
events.addEventListener('notice', event => {
  console.log('got notice:', event.data);
})

// The EventSource leaves the connection open. If we want to close the connection,
// we need to call `close` on the EventSource object.
function cleanup() {
  events.close();
}
