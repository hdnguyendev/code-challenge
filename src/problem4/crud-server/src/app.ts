import dotenv from 'dotenv';
import express from 'express';
import userRoutes from './routes/userRoutes';
import bodyParser from 'body-parser';

dotenv.config()

const app = express();
const PORT = process.env.SERVER_PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});


