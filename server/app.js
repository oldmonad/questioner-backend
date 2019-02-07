/* eslint-disable import/first */
/* eslint-disable eol-last */
import express from 'express';
import '@babel/polyfill';
import swaggerUi from 'swagger-ui-express';
import logger from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import questionerApplication from '../swagger.json';

// Set up express app
const app = express();
import routes from './routes';

app.use(cors());
// Log requests to the console
app.use(logger('dev'));

// Parse incoming request data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false,
}));

app.use('/api/v1', routes);

app.all('/', (req, res) => {
  res.status(200).json({
    status: 200,
    message: 'Welcome to the Questioner API.',
  });
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(questionerApplication));

app.all('/*', (req, res) => res.status(404).json({
  status: 404,
  message: 'This page does not exist you might want to cross-check the address link to be sure you are trying to visit the right address',
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