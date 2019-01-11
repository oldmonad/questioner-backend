/* eslint-disable import/first */
/* eslint-disable eol-last */
import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';

// Set up express app
const app = express();
import expressValidation from 'express-validation';
import meetupRoutes from './routes/meetups';
import questionsRoute from './routes/questions';

// Log requests to the console
app.use(logger('dev'));


// Parse incoming request data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false,
}));


app.use('/api/v1/meetups', meetupRoutes);
app.use('/api/v1/questions', questionsRoute);

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