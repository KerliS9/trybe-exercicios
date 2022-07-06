import express from 'express';
import routersTypes from './routes';
import errorHandler from './middleware/errorHandler';

const app = express();

app.use(express.json());
app.use(routersTypes);

app.use(errorHandler);

export default app;