import mongoose from 'mongoose';


const postSchema = mongoose.Schema(
  {
    date: { type: String, required: true },
    month: { type: String, required: true },
    day: { type: String, required: true },
    title: { type: String, required: true },
    img: { type: String }, 
    text: { type: String, required: true },
    tags: { type: Array},
    address: { type: String },
  },
  { collection: "posts" } 
);

const Post = mongoose.model("posts", postSchema);

export default Post;