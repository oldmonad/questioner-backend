/* eslint-disable max-len */
/* eslint-disable consistent-return */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable eol-last */
import http from 'http';
import express from 'express';
import dotenv from 'dotenv';
import logger from 'morgan';
import bodyParser from 'body-parser';
import path from 'path';
import dataStructureRoutes from './server/usingJsDataStructures/routes/routes';
// import dbRoutes from './server/usingDB/routes/routes';

dotenv.config();
const defaultApi = process.env.API_BASE;
const server = express();
const router = express.Router();

// Port configuration
const port = parseInt(process.env.PORT, 10) || 8000;

dataStructureRoutes(router);

// Log requests to the console
server.use(logger('dev'));

// Parse incoming request data
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({
  extended: false,
}));
server.use('/documentation', express.static('build'));
server.use(express.static(path.join(__dirname, '/client/src/build')));

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});


// API Routes
server.use(defaultApi, router);

// Set up all default catch-all route that sends a message in JSON format
server.get('*', (req, res) => res.status(404).send({
  message: 'That route does not exist',
}));


const app = http.createServer(server);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${port}`);
});

export default server;