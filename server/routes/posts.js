import express from 'express';
import {
  createPost,
  readPosts,
  updatePost,
  deletePost,
  getSinglePost,
} from '../controller/postsController.js';

const router = express.Router();

router.get('/', readPosts);

router.get('/:id', getSinglePost);

router.post('/', createPost);

router.patch('/:id', updatePost);

router.delete('/:id', deletePost);

export default router;
