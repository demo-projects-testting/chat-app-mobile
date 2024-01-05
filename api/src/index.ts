import dotenv from 'dotenv';
import * as mongoose from 'mongoose';
import * as process from 'process';

import app from './app';

dotenv.config();

const PORT = process.env.PORT || 3001;

mongoose.set('strictQuery', true);

mongoose
  .connect(String(process.env.SERVER_MONGO_URI), { retryWrites: true, w: 'majority' })
  .then(() => {
    console.log('Connected to Mongodb');

    app.listen(PORT, () => {
      console.log(`Connected to server at: http://localhost:${PORT}`);
    });
  })
  .catch((error) => console.log(error));
