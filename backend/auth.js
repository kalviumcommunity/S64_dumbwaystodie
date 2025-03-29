const express = require('express');
const router = express.Router();
const { generateToken } = require('../config/jwtConfig');

// Mock user data - replace with real authentication logic
const users = [
  { id: 1, username: 'user1', password: 'password123' },
  { id: 2, username: 'user2', password: 'securepass' }
];

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username && u.password === password);

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6ImdhdXJhbmciLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNzQzMjIxMTk5LCJleHAiOjE3NDMyMjQ3OTl9.V2o8L2AOlCfbLOxt-rxbAFJ1XD85e8VEiwkwF4nrhS4";

  res.cookie('token', token, {
    httpOnly: true,
    secure: true, // Enable for HTTPS
    sameSite: 'Strict'
  });

  res.status(200).json({ message: 'Login successful' });
});

module.exports = router;
