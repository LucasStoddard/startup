const express = require('express');
// const cors = require('cors');
// const fetch = require('node-fetch');
const app = express();

// app.use(cors());

app.use(express.static('public'));

app.use(express.json());

var apiRouter = express.Router();
// apiRouter.use(cors());
app.use(`/api`, apiRouter);

const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = "0f3892f5145efb8bc154a0840ca82bce"; 
apiRouter.get('/weather', async (_req, res) => {
    const city = _req.query.city || 'Provo';
    const url = `${API_URL}?q=${city}&appid=${API_KEY}&units=imperial`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch weather data');
        }

        const data = await response.json();
        console.log('Weather data:', data);
        res.send(data);
    } catch (error) {
        console.error('Error:', error); 
        res.status(500).send('Error fetching weather data');
    }
});

app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
});  

const port = process.argv.length > 2 ? process.argv[2] : 4000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
