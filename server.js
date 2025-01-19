const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const port = 3000;

// Enable CORS for communication with the frontend
app.use(cors());

app.use(express.static('Assessment 2 responsive web'));

// Serve album data
app.get('/api/albums', (req, res) => {
    fs.readFile('./albums.json', (err, data) => {
      if (err) {
        res.status(500).send('Error reading album data');
      } else {
        res.json(JSON.parse(data));
      }
    });
  });

// Compilations endpoint
app.get('/api/compilations', (req, res) => {
  fs.readFile('./compilations.json', (err, data) => {
    if (err) {
      res.status(500).send('Error reading compilation data');
    } else {
      res.json(JSON.parse(data));
    }
  });
});
app. listen(port,() =>{
    console.log(`Server running at http://localhost:${port}`);
})