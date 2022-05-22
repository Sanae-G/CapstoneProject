import express from 'express';
import {
  createPost,
  readPosts,
  updatePost,
  deletePost,
  getSinglePost,
} from '../controller/postsController.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

router.get('/', auth, readPosts);

router.get('/:id', getSinglePost);

router.post('/', createPost);

router.patch('/:id', updatePost);

router.delete('/:id', deletePost);

export default router;
