let socket = io();

socket.on('connect', function() {
  console.log('Connected to server');

  // Client emitting
  socket.emit('createMessage', {
    from: 'playa1',
    text: 'Yo!'
  });
});

// Client listening
socket.on('disconnect', function() {
  console.log('Disconnected from server');
});

// Client listening
socket.on('newMessage', function(message) {
  console.log('New message', message);
});