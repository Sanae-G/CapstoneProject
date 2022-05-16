import Post from '../models/postsModel.js';
import { v2 as cloudinary } from 'cloudinary';

export const readPosts = async (req, res) => {
  try{
    const posts = await Post.find({})
    res.send(posts);
  } catch (error){
    res.status(500).send(error)
  }
  };

export const createPost = async (req, res) => {
  const date = req.body.date;
  const month = req.body.month;
  const day = req.body.day;
  const title = req.body.title;
  const text = req.body.text;
  const address = req.body.address;
  const tags = req.body.tags;
  const img = req.body.base64EncodedImage;

  const cloudinaryName = process.env.CLOUDINARY_NAME;
  const cloudinaryKey = process.env.CLOUDINARY_API_KEY;
  const cloudinarySecret = process.env.CLOUDINARY_API_SECRET;
  const cloudinaryPreset = process.env.CLOUDINARY_PRESET;

  cloudinary.config({
    cloud_name: cloudinaryName,
    api_key: cloudinaryKey,
    api_secret: cloudinarySecret,
  });

  const uploadedResponse = await cloudinary.uploader.upload(img, {
    upload_preset: cloudinaryPreset,
    allowed_formats: ['png', 'jpeg', 'jpg'],
  });

  const newPost = new Post({
    date: date,
    month: month,
    day: day,
    title: title,
    img: uploadedResponse.url,
    text: text,
    tags: tags.split(','),
    address: address,
  });

  newPost
    .save()
    .then(data => {
      res.status(201).json(data);
    })
    .catch(error => {
      res.status(400).json({ error: error.message });
    });
};

export const updatePost = (req, res, next) => {
  const id = req.params.id;
  const date = req.body.date;
  const month = req.body.month;
  const day = req.body.day;
  const title = req.body.title;
  const text = req.body.text;
  const address = req.body.address;
  const tags = req.body.tags.split(',');
  const img = req.body.img;

  Post.findByIdAndUpdate(id, { date, month, day, title, text, address, tags, img }, { new: true })
    .then(data => {
      res.status(200).send(data);
    })
    .catch(() => {
      next();
    });
};

export const deletePost = (req, res, next) => {
  const id = req.params.id;
  Post.findByIdAndDelete(id)
    .then(data => {
      res.status(200).send(data);
    })
    .catch(() => {
      next();
    });
};

export const getSinglePost = (req, res, next) => {
  const id = req.params.id;
  Post.findById(id)
    .then(data => {
      res.send(data);
    })
    .catch(() => {
      next();
    });
};
