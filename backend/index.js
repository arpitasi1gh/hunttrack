const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const verifyToken = require('./middleware/auth');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());
// Routes
app.use('/api/v1/auth', authRoutes);

// Testing routes
app.get('/', (req, res) => {
    res.send("Hello from HuntTrack!");
});
app.get('/api/v1/protected', verifyToken, (req, res) => {
  res.json({
    message: 'This is a protected route',
    user: req.user, // The user info from the token
  });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});