import express from 'express';
import {signUp} from '../controller/authController.js';
import {getAllUsers} from '../controller/usersController.js';

const router = express.Router();

router.post('/signup', signUp);

router.get('/', getAllUsers);

export default router;
