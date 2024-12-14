const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

// Initialize Express app
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve static files from the public directory
app.use(express.static('public'));

// Handle socket connections
io.on('connection', (socket) => {
  console.log('A user connected');

  // Handle offer
  socket.on('offer', (offer) => {
    console.log('Received offer:', offer);
    socket.broadcast.emit('offer', offer); // Broadcast offer to other clients
  });

  // Handle answer
  socket.on('answer', (answer) => {
    console.log('Received answer:', answer);
    socket.broadcast.emit('answer', answer); // Broadcast answer to other clients
  });

  // Handle ICE candidate
  socket.on('new-ice-candidate', (candidate) => {
    console.log('Received ICE candidate:', candidate);
    socket.broadcast.emit('new-ice-candidate', candidate); // Broadcast ICE candidate to other clients
  });

  // Handle disconnect
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

// Start server on port 3000
server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
