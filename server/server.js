/* eslint-disable eol-last */
/* eslint-disable no-undef */
import http from 'http';
import express from 'express';
import dotenv from 'dotenv';
import logger from 'morgan';
import bodyParser from 'body-parser';
import routes from './usingJsDataStructures/routes/routes';

dotenv.config();
// Set up express app
const server = express();
const router = express.Router();

// Port configuration
const port = process.env.PORT || 8000;

routes(router);

// Log requests to the console
server.use(logger('dev'));

// Parse incoming request data
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({
  extended: false,
}));

// API Routes
server.use('/api/v1', router);

// Set up all default catch-all route that sends a message in JSON format
server.get('*', (req, res) => res.status(404).send({
  message: 'That route does not exist',
}));

server.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 400;
  next(error);
});

server.use((error, req, res) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

// Create server
const app = http.createServer(server);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default server;