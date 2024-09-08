const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  const apiURL = decodeURIComponent(req.query.path);
  console.log(apiURL)
  
  fetch(apiURL, {
    method: 'GET',
    headers: {
      'x-api-key': `${process.env.apikey}`
    }
  })
  .then(response => response.json())
  .then(data => {
    res.status(200).json(data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
    res.status(500).json({ message: 'Server error' });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
