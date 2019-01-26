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

app.all('/api/v1', (req, res) => {
  res.status(200).json({
    status: 200,
    message: 'Welcome to the Questioner API.',
  });
});

app.all('/*', (req, res) => res.status(404).json({
  status: 404,
  message: 'This route does not exist you might want to check your route specification on postman or check your route configurations.',
}));

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