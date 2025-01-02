import dotenv from 'dotenv';
import express from 'express';
import userRoutes from './routes/userRoutes';
import bodyParser from 'body-parser';
import { Request } from 'express';
import cors from 'cors';

dotenv.config()

const app = express();
const PORT = process.env.SERVER_PORT || 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors<Request>());
app.use('/api', userRoutes);


app.use(express.static(__dirname + '/public'));
app.use('/uploads', express.static('uploads'));

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});


