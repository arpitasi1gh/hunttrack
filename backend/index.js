require('dotenv').config();

const requiredEnvVars = ['DATABASE_URL', 'JWT_SECRET'];
const missing = requiredEnvVars.filter(key => !process.env[key]);

if (missing.length > 0) {
  console.error('❌ Missing required environment variables:');
  missing.forEach(key => console.error(`   - ${key}`));
  console.error('Please add them to your .env file.');
  process.exit(1);
}

console.log('✅ Environment variables validated.');

const express = require('express');

const cors = require('cors');
const helmet = require('helmet');

const authRoutes = require('./routes/auth');
const verifyToken = require('./middleware/verifyToken');
const applicationRoutes = require('./routes/applications');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(helmet());

// Allowing access to only specific origins
const allowedOrigins = ['http://localhost:5173', 'http://localhost:3000'];
app.use(cors({
  origin: function (origin, callback) {
    // Allowing requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}))

// Routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/applications', verifyToken, applicationRoutes);

// Testing routes
app.get('/', (req, res) => {
    res.send("Hello from HuntTrack!");
});
/* app.get('/api/v1/protected', verifyToken, (req, res) => {
  res.json({
    message: 'This is a protected route',
    user: req.user, // The user info from the token
  });
}); */

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});