const express = require('express');
const fetch = require('node-fetch');
const app = express();

const port = process.argv.length > 2 ? process.argv[2] : 4000;
// Weather stuff
const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '0f3892f5145efb8bc154a0840ca82bce';

app.use(express.static('public'));

app.use(express.json());

var apiRouter = express.Router();
app.use(`/api`, apiRouter);

apiRouter.get('/weather', async (_req, res) => {
    const city = _req.query.city || 'Provo';
    const url = `${WEATHER_API_URL}?q=${city}&appid=${API_KEY}&units=imperial`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch weather data');
        }
        const data = await response.json();

        const weatherData = {
            temp: data.main.temp,
            icon: data.weather[0].icon,
        };
        res.json(weatherData);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching weather data');
    }
});

app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
});
  
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});