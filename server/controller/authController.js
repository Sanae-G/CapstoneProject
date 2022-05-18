import User from '../models/usersModel.js';
import jwt from 'jsonwebtoken';

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
      status: 'registration was successful!',
      token,
      data: {
        user: newUser,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error,
    });
  }
};

export const logIn = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({
      status: 'fail',
      message: 'Please provide email and password!',
    });
  } else {
    try {
      const user = await User.findOne({ email }).select('+password');

      if (!user || !(await user.correctPassword(password, user.password))) {
        res.status(401).json({
          status: 'fail',
          message: 'incorrect password and/or email!',
        });
      } else {
        const token = signToken(user._id);
        res.status(200).json({
          status: 'login was successful!',
          token,
        });
      }
    } catch (error) {
      res.status(400).json({
        status: 'fail',
        message: error,
      });
    }
  }
};
