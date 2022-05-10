import mongoose from 'mongoose';


const postSchema = mongoose.Schema(
  {
    date: { type: String, required: [ true, 'Your post requires a date!' ] },
    month: { type: String, required: [ true, 'Your post requires a month!' ] },
    day: { type: String, required: [ true, 'Your post requires a day' ] },
    title: { type: String, required: [ true, 'Your post requires a title!' ]},
    img: { type: String }, 
    text: { type: String, required: [ true, 'Your post requires a content!' ] },
    tags: { type: Array},
    address: { type: String },
  },
  { collection: "posts" } 
);

const Post = mongoose.model("posts", postSchema);

export default Post;