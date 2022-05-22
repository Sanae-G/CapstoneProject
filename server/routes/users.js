import express from 'express';
import { signUp, logIn } from '../controller/authController.js';
import { getAllUsers } from '../controller/usersController.js';


const router = express.Router();

router.post('/signup', signUp);

router.post('/login', logIn);

router.get('/', getAllUsers);

export default router;
