const express = require('express');
// const cors = require('cors');
// const fetch = require('node-fetch');
const app = express();
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const DB = require('./database.js');

const port = process.argv.length > 2 ? process.argv[2] : 4000;
// app.use(cors());

app.use(express.static('public'));

app.use(express.json());

pp.use(cookieParser());

app.set('trust proxy', true);

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

// LOGIN STUFF
apiRouter.post('/auth/create', async (req, res) => {
    if (await DB.getUser(req.body.email)) {
      res.status(409).send({ msg: 'Existing user' });
    } else {
      const user = await DB.createUser(req.body.email, req.body.password);
      setAuthCookie(res, user.token);
      res.send({
        id: user._id,
      });
    }
});

apiRouter.post('/auth/login', async (req, res) => {
    const user = await DB.getUser(req.body.email);
    if (user) {
      if (await bcrypt.compare(req.body.password, user.password)) {
        setAuthCookie(res, user.token);
        res.send({ id: user._id });
        return;
      }
    }
    res.status(401).send({ msg: 'Unauthorized' });
});
  
apiRouter.delete('/auth/logout', (_req, res) => {
    res.clearCookie(authCookieName);
    res.status(204).end();
});

const secureApiRouter = express.Router();
apiRouter.use(secureApiRouter);
secureApiRouter.use(async (req, res, next) => {
  const authToken = req.cookies[authCookieName];
  const user = await DB.getUserByToken(authToken);
  if (user) {
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
});

// getHighScores -> getCalendar
// addScore -> addEvent
// MODIFY TO BE getCalendar
secureApiRouter.get('/scores', async (req, res) => {
    const scores = await DB.getHighScores();
    res.send(scores);
});

// MODIFY TO BE submitCalendar
secureApiRouter.post('/score', async (req, res) => {
    const score = { ...req.body, ip: req.ip };
    await DB.addScore(score);
    const scores = await DB.getHighScores();
    res.send(scores);
});
  
app.use(function (err, req, res, next) {
    res.status(500).send({ type: err.name, message: err.message });
});

app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
});  

function setAuthCookie(res, authToken) {
    res.cookie(authCookieName, authToken, {
      secure: true,
      httpOnly: true,
      sameSite: 'strict',
    });
  }

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
