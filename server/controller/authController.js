import User from '../models/usersModel.js';

export const signUp = async (req, res) => {
  try {
    const newUser = await User.create(req.body);

    res.status(201).json({
      status: 'registration was successful!',
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
