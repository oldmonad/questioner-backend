/* eslint-disable consistent-return */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable eol-last */
import http from 'http';
import express from 'express';
import dotenv from 'dotenv';
import logger from 'morgan';
import bodyParser from 'body-parser';
// import path from 'path';
import dataStructureRoutes from './server/usingJsDataStructures/routes/routes';
// import dbRoutes from './server/usingDB/routes/routes';


dotenv.config();

// Set up express app

// const routes = process.env.TYPE === 'db' ? dbRoutes : dataStructureRoutes;


const server = express();
const router = express.Router();

// Port configuration
const port = parseInt(process.env.PORT, 10) || 8000;


dataStructureRoutes(router);


// Log requests to the console
server.use(logger('dev'));
server.use(bodyParser.urlencoded({
  extended: false,
}));
server.use(bodyParser.json());

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});

const defaultApi = process.env.API_BASE;

// API Routes
server.use(defaultApi, router);


const app = http.createServer(server);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${port}`);
});

export default server;