// install dependencies
require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const formRoutes = require('./routes/formRoutes');
const projectRoutes = require('./routes/projectRoutes.js');
const cors=require('cors');



const app = express();
const PORT = process.env.PORT || 5500;

// Enable CORS for all routes
app.use(cors({
  origin:["https://fnd-seven.vercel.app"],
  methods:["GET","POST"],
  credentials:true
}));

// Connect to MongoDB
// MongoDB connection
mongoose.connect(process.env.URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connected to MongoDB");
  // Start server after successful MongoDB connection
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch((err) => {
  console.error("Error connecting to MongoDB:", err);
  process.exit(1);
});



// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use('/api/form', formRoutes);
app.use("/api/projects", projectRoutes);

