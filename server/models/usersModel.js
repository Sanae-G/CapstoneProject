import mongoose from 'mongoose';
import validator from 'validator';

const userSchema = mongoose.Schema(
  {
    username: { type: String, required: [true, 'You need a username'] },
    email: {
      type: String,
      required: [true, 'Please provide an email'],
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, 'Please provide a valid email'],
    },
    password: { type: String, required: [true, 'Please provide a password'], minlength: 8 },
    passwordConfirm: { type: String, required: [true, 'Please confirm your password!'] },
  },
  { collection: "users" }
);

const User = mongoose.model("users", userSchema);

export default User;
