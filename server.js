require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');

const app = express();

// Middleware
app.use(express.json());
app.use(cors(
    {
    origin: true, 
    credentials: true, }
));

//cookie-parser
app.use(cookieParser()); // <- Middleware setup happens here

// Connect to MongoDB Atlas
connectDB();

// Routes
const customAgentRoutes = require('./routes/customAgent.routes');
const historyRoutes = require('./routes/history.routes')
const userAgentInfoRoutes = require('./routes/userAgentInfo.routes')
app.use('/api/custom-agents', customAgentRoutes);
app.use('/api/history', historyRoutes)
app.use('/api/user-agent-info', userAgentInfoRoutes)

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
