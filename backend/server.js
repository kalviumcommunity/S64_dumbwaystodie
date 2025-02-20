const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;


// Middleware to parse JSON
app.use(express.json());

// Simple /ping route
app.get('/ping', (req, res) => {
    res.json({ message: 'pong' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
