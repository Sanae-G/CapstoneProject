import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import cors from 'cors';

import dotenv from 'dotenv';

import postsRoutes from './routes/posts.js';
import api from './routes/api.js';

import connectDB from './config/db.js';
// import Post from './models/postsModel.js';

const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME

dotenv.config();

connectDB();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 5007;

app.use(express.json());

var whitelist = ['http://localhost:5007', 
`https://api.cloudinary.com/v1_1/${CLOUDNAME}/image/upload`]
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
 
app.post(`https://api.cloudinary.com/v1_1/${CLOUDNAME}/image/upload`, 
cors(corsOptions), function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for a whitelisted domain.'})
})


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
