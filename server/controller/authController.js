import User from '../models/usersModel.js';
import jwt from 'jsonwebtoken';
import validator from 'validator';

function signToken(userID) {
  return jwt.sign({ id: userID }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES,
  });
}

export const signUp = async (req, res) => {
  try {
    const newUser = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm,
    });

    const token = signToken(newUser._id);

    res.status(201).json({
      status: 'Registration was successful!',
      token,
      data: {
        user: newUser,
      },
    });
  } catch (error) {
    if (validator.isEmail(req.body.email) == false) {
      res.status(400).json({
        status: 'fail',
        message: 'Please provide a valid email.',
      });
    } else if (req.body.password !== req.body.passwordConfirm) {
      res.status(400).json({
        status: 'fail',
        message: 'The passwords are not identical.',
      });
    } else if (req.body.password.length < 8) {
      res.status(400).json({
        status: 'fail',
        message: 'The password must be at least 8 characters long.',
      });
    } else {
      res.status(400).json({
        status: 'fail',
        message: 'An account with this email already exists.',
      });
    }
  }
};

export const logIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email }).select('+password');
    if (user && (await user.correctPassword(password, user.password))) {
      const token = signToken(user._id);
      res.status(200).json({
        status: 'success',
        message: 'Login was successful!',
        token,
      });
    } else {
      throw Error();
    }
  } catch (error) {
    if (!email || !password) {
      res.status(400).json({
        status: 'fail',
        message: 'Please provide email and password!',
      });
    } else {
      res.status(401).json({
        status: 'fail',
        message: 'Incorrect password and/or email!',
      });
    }
  }
};
