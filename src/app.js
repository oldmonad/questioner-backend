import express from 'express';
import meetupRoutes from './api/usingJsDataStructures/routes/meetup';

const app = express();


app.use('/api/v1/meetups', meetupRoutes);


export default app;
