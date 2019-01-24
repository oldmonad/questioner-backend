/* eslint-disable import/first */
/* eslint-disable eol-last */
import express from 'express';
import '@babel/polyfill';
import logger from 'morgan';
import bodyParser from 'body-parser';

// Set up express app
const app = express();
import routes from './routes';

// Log requests to the console
app.use(logger('dev'));

// Parse incoming request data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false,
}));

app.use('/api/v1', routes);

app.use((req, res, next) => {
  const error = new Error('Invalid route');
  error.status = 404;
  next(error);
});

app.use((error, req, res) => {
  res.status(error.status || 500);
  res.json({
    status: error.status,
    error: error.messages,
  });
});


export default app;