import Post from '../models/postsModel.js';

export const readPosts = async (req, res) => {

    const posts = await Post.find()
    try{
        res.status(200).json(posts);
    }catch(error){
        res.status(404).json({
            error: error.message
        })
    }
}

export const createPost = async (req, res) => {
    // const date = req.body.date;
    // const month = req.body.month;
    // const day = req.body.day;
    // const title = req.body.title;
    // const text = req.body.text;
    // const address = req.body.address;
    // const tags = req.body.tags;

    // const newPost = Post(
    //     {
    //         date: month + ' ' + date,
    //         day: day,
    //         title: title,
    //         img: '',
    //         text: text,
    //         tags: tags.split(','),
    //         address: address
    //     }
    // );

    // newPost
    // .save()
    // .then((data) => {
    //   res.status(201).json(data);
    // })
    // .catch((error) => {
    //     res.status(400).json({ error: error.message });
    //   });
    try{
        res.status(200).json({message: `set post`});
    }catch(error){
        res.status(409).json({
            error: error.message
        })
    }

    }



export const updatePost = async (req, res) => {
    try{
        res.status(200).json({message: `update goal ${req.params.id}`});
    }catch(error){
        res.status(409).json({
            error: error.message
        })
    }
}

export const deletePost = async (req, res) => {
    try{
        res.status(200).json({message: `delete goal ${req.params.id}`});
    }catch(error){
        res.status(409).json({
            error: error.message
        })
    }
}