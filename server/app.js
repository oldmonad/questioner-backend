/* eslint-disable import/first */
/* eslint-disable eol-last */
import express from 'express';
import '@babel/polyfill';
import logger from 'morgan';
import bodyParser from 'body-parser';
import pg from 'pg';

// Set up express app
const app = express();
import expressValidation from 'express-validation';
import userRoutes from './routes/user';
import AdminRoutes from './routes/admin';
import meetupRoutes from './routes/meetups';
import questionsRoute from './routes/questions';
// import commentRoutes from './routes/comments';

// Log requests to the console
app.use(logger('dev'));


// Parse incoming request data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false,
}));

// app.use('/api/v1/admin', AdminRoutes);
// app.use('/api/v1', userRoutes);
app.use('/api/v1', userRoutes);
// app.use('/api/v1/meetups', meetupRoutes);
// app.use('/api/v1/questions', questionsRoute);
// app.use('api/v1/comments', commentRoutes);

app.use((req, res, next) => {
  const error = new Error('Invalid route');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  if (error instanceof expressValidation.ValidationError) {
    res.status(error.status).json(error);
  } else {
    res.status(500)
      .json({
        status: error.status,
        message: error.messages,
      });
  }
});

app.use((error, req, res) => {
  res.status(error.status || 500);
  res.json({
    status: error.status,
    error: error.messages,
  });
});


export default app;