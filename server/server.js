import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';


import api from './routes/api.js';

import connectDB from './config/db.js';
// import Post from './models/postsModel.js';

dotenv.config();

connectDB();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 5007;

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.post('/upload', async (req, res, next) => {
  try {
    const image = req.body.data;
    const uploadedResponse = await cloudinary.uploader.upload(image, {
      upload_preset: cloudinaryPreset,
      allowed_formats: ['png', 'jpeg', 'jpg'],
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ err: 'Something went wrong!' });
  }
  console.log('Accessing the upload section ...');
  next(); // pass control to the next handler
});


app.use(express.static('public'));

// Serve the React static files after build
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Serve API
app.use('/api', api);



// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
