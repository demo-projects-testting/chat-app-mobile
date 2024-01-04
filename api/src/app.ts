import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import passport from 'passport';
import { authenticateRoutes } from 'routes/index';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(cors());

app.use(passport.initialize());

app.use('/api/authenticate', authenticateRoutes);

export default app;
