import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import donenv from 'dotenv'


import api from './api';
import { errorHandler } from './middleware/errorHandler';
import { notFound } from './middleware/notFound';
import { redirectToV1 } from './middleware/redirect-to-api';


donenv.config()

const port = process.env.PORT || 5000;
const app = express();


app.use(morgan('dev'));
app.use(helmet());
app.use(cors({
  origin: ['http://localhost:5173', 'https://learn-lang-app.vercel.app']
}));
app.use(redirectToV1);
app.use(express.json());




app.use('/api/v1', api);


app.use(notFound);
app.use(errorHandler);



app.listen(port, () => console.log(`Listening: http://localhost:${port}`));



export default app;
