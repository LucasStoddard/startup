const express = require('express');
const app = express();

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
