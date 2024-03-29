import express from 'express'; // ES module
const app = express();
const port = 3000;
import data from './data/data.json' assert { type: 'json' };

// Serve static files from the "public" directory
app.use(express.static('public'));

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

app.get('/api/data', (req, res) => {
  res.json(data);
});
