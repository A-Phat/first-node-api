// Import required modules
const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Use the provided port or default to 3000

// Middleware setup (order matters)
app.use(express.json()); // Parse JSON requests
app.use(express.urlencoded({ extended: false })); // Parse URL-encoded requests

// Define a simple middleware function for demonstration
app.use((req, res, next) => {
  console.log(`Request received at ${new Date()}`);
  next();
});

// Define your routes (example)
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Error handling middleware (must be defined after your routes)
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
