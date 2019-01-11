/* eslint-disable eol-last */
import http from 'http';
import dotenv from 'dotenv';
import app from './app';

dotenv.config();

const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${port}`);
});


// /* eslint-disable eol-last */
// /* eslint-disable no-undef */
// import http from 'http';
// import express from 'express';
// import dotenv from 'dotenv';
// import logger from 'morgan';
// import bodyParser from 'body-parser';
// // import expressValidator from 'express-validator';

// import routes from './routes/routes';

// dotenv.config();
// // Set up express app
// const server = express();
// const router = express.Router();

// // Port configuration
// const port = process.env.PORT || 8000;

// routes(router);

// // Log requests to the console
// server.use(logger('dev'));

// // Parse incoming request data
// server.use(bodyParser.json());
// server.use(bodyParser.urlencoded({
//   extended: false,
// }));
// // server.use(expressValidator());

// // API Routes
// server.use('/api/v1', router);
// server.use((req, res, next) => {
//   const error = new Error('Not Found');
//   error.status = 400;
//   next(error);
// });

// server.use((error, req, res) => {
//   res.status(error.status || 500);
//   res.json({
//     error: {
//       message: error.message,
//     },
//   });
// });

// // Create server
// const app = http.createServer(server);

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });

// export default server;