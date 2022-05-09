import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

import dotenv from 'dotenv';

import postsRoutes from './routes/posts.js';
import api from './routes/api.js';

import connectDB from './config/db.js';
// import Post from './models/postsModel.js';

dotenv.config();

connectDB();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 5007;

app.use(express.json());

// const testPost = new Post(
//   {
//     title: 'hello',
//     date: '3rd',
//     month: 'february',
//     text: 'whatever whatever'
//   }
// )

// testPost.save().then(doc => {
//   console.log(doc)
// }).catch(err => {
//   console.log('ERROR:', err)
// })

//serve API from MongoDB
app.use('/posts', postsRoutes);

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
