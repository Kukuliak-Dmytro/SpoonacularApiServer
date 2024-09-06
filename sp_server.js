const express = require('express');
const cors = require('cors');  // Import the cors middleware
const axios = require('axios');
require('dotenv').config();  // To use environment variables

const app = express();
const PORT = 5000; 

// Middleware to parse JSON requests
app.use(express.json());
app.use(cors());
// Example route that makes an API call
app.get('/', async (req, res) => {
  const path = req.query.path;  

  try {
    const response = await axios.get(`https://api.spoonacular.com/${path}`, {
      headers: {
        'x-api-key': `${process.env.apikey}` 
      }
    });
    res.status(response.status).json(response.data);

  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
