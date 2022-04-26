import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import handleChange from './controller/handleChange';
import rateLimit, { MemoryStore } from 'express-rate-limit';

const port = 3000;
const app = express();

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(helmet());
app.use('/change', handleChange);
app.use(
  rateLimit({
    windowMs: 10 * 60 * 1000, // 10 minutes
    max: 50, // Limit each IP to 50 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    store: new MemoryStore()
  })
);

app.listen(port, () => {
  console.log('Server listening on port ', port);
});
