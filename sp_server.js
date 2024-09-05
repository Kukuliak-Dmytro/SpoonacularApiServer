const express = require('express');
const axios = require('axios');
require('dotenv').config();  // To use environment variables

const app = express();
const PORT = 5000; 

// Middleware to parse JSON requests
app.use(express.json());

// Example route that makes an API call
app.get('/', async (req, res) => {
  try {
    const response = await axios.get('https://api.spoonacular.com/recipes/complexSearch?number=5', {
      headers: {
        'x-api-key': `${process.env.apikey}` 
      }
    });
    res.status(200).json(response.data);
    console.log(response.data);    

  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ message: 'Server error' });
  }
  res.end();
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
