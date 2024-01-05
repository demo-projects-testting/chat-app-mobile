import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import passport from 'passport';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(cors());

app.use(passport.initialize());

app.get('/api', (req, res) => {
  res.json({
    success: true,
    message: 'Hello World, I am testing deploy nodejs server'
  });
});

export default app;
