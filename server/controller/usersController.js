
import User from '../models/usersModel.js';

export const getAllUsers = async (req, res) => {
  try{
    const users = await User.find({})
    res.send(users);
  } catch (error){
    res.status(500).send(error)
  }
  };