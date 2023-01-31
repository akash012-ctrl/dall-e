import mongoose from "mongoose";

const Post = new mongoose.Schema({
  name: {
    type:String,
    required: true,
  },
  prompt: {
    type:String,
    required: true,
  },
  photo: {
    type:String,
    required: true,
  },
});

// name for model and name of schema into model
const PostSchema = mongoose.model("Post", Post);

export default PostSchema;