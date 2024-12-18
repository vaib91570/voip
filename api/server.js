// const express = require('express');
// const http = require('http');
// const socketIo = require('socket.io');
// const cors = require('cors');


// const PORT = process.env.PORT || 3001;
// // Initialize Express app
// const app = express();
// const server = http.createServer(app);
// const io = socketIo(server);
// const socket = io('https://voip-git-main-vaibs-projects-4538b6ad.vercel.app');

// // Serve static files from the public directory
// app.use(express.static('public'));
// app.use(cors({ origin: 'https://voip-git-main-vaibs-projects-4538b6ad.vercel.app' }));


// // Handle socket connections
// io.on('connection', (socket) => {
//   console.log('A user connected');

//   // Handle offer
//   socket.on('offer', (offer) => {
//     console.log('Received offer:', offer);
//     socket.broadcast.emit('offer', offer); // Broadcast offer to other clients
//   });

//   // Handle answer
//   socket.on('answer', (answer) => {
//     console.log('Received answer:', answer);
//     socket.broadcast.emit('answer', answer); // Broadcast answer to other clients
//   });

//   // Handle ICE candidate
//   socket.on('new-ice-candidate', (candidate) => {
//     console.log('Received ICE candidate:', candidate);
//     socket.broadcast.emit('new-ice-candidate', candidate); // Broadcast ICE candidate to other clients
//   });

//   // Handle disconnect
//   socket.on('disconnect', () => {
//     console.log('User disconnected');
//   });
// });

// // Start server on port 3000
// server.listen(PORT, () => {
//   console.log('Server is running on http://localhost:' + PORT);
// });


// --- 

// const express = require('express');
// const http = require('http');
// const socketIo = require('socket.io');
// const cors = require('cors');

// const PORT = process.env.PORT || 3001;

// // Initialize Express app
// const app = express();
// const server = http.createServer(app);
// const io = socketIo(server); // Server-side instance of Socket.IO

// // Middleware
// app.use(express.static('public'));
// app.use(cors({ origin: 'https://voip-git-main-vaibs-projects-4538b6ad.vercel.app' }));

// // Handle socket connections
// io.on('connection', (socket) => {
//   console.log('A user connected');

//   // Handle offer
//   socket.on('offer', (offer) => {
//     console.log('Received offer:', offer);
//     socket.broadcast.emit('offer', offer); // Broadcast offer to other clients
//   });

//   // Handle answer
//   socket.on('answer', (answer) => {
//     console.log('Received answer:', answer);
//     socket.broadcast.emit('answer', answer); // Broadcast answer to other clients
//   });

//   // Handle ICE candidate
//   socket.on('new-ice-candidate', (candidate) => {
//     console.log('Received ICE candidate:', candidate);
//     socket.broadcast.emit('new-ice-candidate', candidate); // Broadcast ICE candidate to other clients
//   });

//   // Handle disconnect
//   socket.on('disconnect', () => {
//     console.log('User disconnected');
//   });
// });

// // Start server on port
// server.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });


// ----

// const express = require('express');
// const cors = require('cors');
// const app = express();

// // Allow all origins
// app.use(cors());

// // Alternatively, restrict to specific origins
// // app.use(cors({ origin: 'https://voip-8b04q737b-vaibs-projects-4538b6ad.vercel.app' }));

// const server = require('http').createServer(app);
// const io = require('socket.io')(server, {
//     cors: {
//         origin: 'https://voip-8b04q737b-vaibs-projects-4538b6ad.vercel.app', // Allow only your client origin
//         methods: ['GET', 'POST'], // Allowed HTTP methods
//     },
// });

// io.on('connection', (socket) => {
//     console.log('A user connected');
//     // Your socket logic here
// });

// server.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });


//-----

// const express = require('express');
// const http = require('http');
// const socketIo = require('socket.io');
// // const cors = require('cors');
// const cors = require('cors');
// app.use(cors({
//   origin: 'https://voip-dzlyt0ldy-vaibs-projects-4538b6ad.vercel.app', // Frontend URL
//   methods: ['GET', 'POST'],
// }));


// const app = express();
// const server = http.createServer(app);
// // const io = socketIo(server, {
// //   cors: {
// //     origin: 'https://voip-git-main-vaibs-projects-4538b6ad.vercel.app', // Ensure this is the correct origin
// //     methods: ['GET', 'POST'],
// //   },
// // });
// const io = socketIo(server, {
//   cors: {
//     origin: 'https://voip-dzlyt0ldy-vaibs-projects-4538b6ad.vercel.app', // Frontend URL
//     methods: ['GET', 'POST'],
//   },
// });


// // Handle socket connections
// io.on('connection', (socket) => {
//   console.log('A user connected');

//   // const socket = io('https://voip-git-main-vaibs-projects-4538b6ad.vercel.app');
//   const socket = io('https://voip-git-main-vaibs-projects-4538b6ad.vercel.app');
  
//   socket.on('connect', () => {
//     console.log('Connected to server');
//   });


//   // Handle offer
//   socket.on('offer', (offer) => {
//     console.log('Received offer:', offer);
//     socket.broadcast.emit('offer', offer); // Broadcast offer to other clients
//   });

//   // Handle answer
//   socket.on('answer', (answer) => {
//     console.log('Received answer:', answer);
//     socket.broadcast.emit('answer', answer); // Broadcast answer to other clients
//   });

//   // Handle ICE candidate
//   socket.on('new-ice-candidate', (candidate) => {
//     console.log('Received ICE candidate:', candidate);
//     socket.broadcast.emit('new-ice-candidate', candidate); // Broadcast ICE candidate to other clients
//   });

//   // Handle disconnect
//   socket.on('disconnect', () => {
//     console.log('User disconnected');
//   });
// });

// // Start server
// const PORT = process.env.PORT || 3000;
// server.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: process.env.FRONTEND_URL || 'http://localhost:3000', // Use environment variable for flexibility
    methods: ['GET', 'POST'],
  },
});

// Apply global CORS middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  methods: ['GET', 'POST'],
}));

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

// Start server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
