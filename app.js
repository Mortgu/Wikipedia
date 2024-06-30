import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import router from './src/routes/router.routes.js';

dotenv.config();
const app = express();

const PORT = process.env.PORT || 8080;

// configuration
app.use(cors({ origin: '*', credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/', router);

app.listen(PORT, _ => console.log(`Server is listening on http://localhost:${PORT}/`));