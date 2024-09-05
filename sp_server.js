const express = require('express');
const axios = require('axios');
require('dotenv').config();  // To use environment variables

const app = express();
const PORT = 5000;  // You can change the port if needed

// Middleware to parse JSON requests
app.use(express.json());

// Example route that makes an API call
app.get('/',  (req, res) => {
  try {
    const response =  axios.get('https://api.spoonacular.com/recipes/complexSearch', {
      headers: {
        'x-api-key': `${process.env.apikey}` 
      }
    });
    res.writeHead(200);
    res.write('Successfull connection')    

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
