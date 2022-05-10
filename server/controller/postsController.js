import Post from '../models/postsModel.js';

export const readPosts = (req, res) => {
    Post.find({}).then((data) => {
      res.send(data);
    });
  }

export const createPost = (req, res) => {
    const date = req.body.date;
    const month = req.body.month;
    const day = req.body.day;
    const title = req.body.title;
    const text = req.body.text;
    const address = req.body.address;
    const tags = req.body.tags;


    const newPost = new Post(
        {
            date: date,
            month: month,
            day: day,
            title: title,
            img: '',
            text: text,
            tags: tags.split(','),
            address: address
        }
      )
      
      newPost.save().then((data) => {
        res.status(201).json(data);
      }).catch(error => {
        res.status(400).json({ error: error.message });
      })
    }


export const updatePost = (req, res, next) => {
    const id = req.params.id;
    const date = req.body.date;
    const month = req.body.month;
    const day = req.body.day;
    const title = req.body.title;
    const text = req.body.text;
    const address = req.body.address;
    const tags = req.body.tags.split(',');


    Post.findByIdAndUpdate(id, {date, month, day, title, text, address, tags}, { new: true })
      .then((data) => {
        res.status(200).send(data);
      })
      .catch(() => {
        next();
      });
  }



export const deletePost = (req, res, next) => {
    const id = req.params.id;
    Post.findByIdAndDelete(id)
      .then((data) => {
        res.status(200).send(data);
      })
      .catch(() => {
        next();
      });
  }

export const getSinglePost = (req, res, next) => {
    const id = req.params.id;
    Post.findById(id)
      .then((data) => {
        res.send(data);
      })
      .catch(() => {
        next();
      });
  }