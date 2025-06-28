const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./src/config/db');
const router = require('./src/routes/user.routes');

const app = express();
dotenv.config();
const PORT = process.env.PORT || 4500;

// Connect to MongoDB


// Middleware to parse JSON bodies
app.use(express.json());

// middleware to parse routes
app.use('/api/users', router);

app.get('/', (req, res) => {
    res.send('Welcome Students');
});

connectDB();
app.listen(PORT, () => {
    console.log(`Server is running on port: http://localhost:${PORT}`);
});
