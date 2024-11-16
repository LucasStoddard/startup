const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.static('public'));

app.use(express.json());

var apiRouter = express.Router();
app.use(`/api`, apiRouter);

apiRouter.get('/weather', (_req, res) => {
    res.send(weather);
});

app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
});
  
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});