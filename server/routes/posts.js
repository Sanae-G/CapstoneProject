import express from 'express';
import { createPost, readPosts, updatePost, deletePost } from '../controller/postsController.js';

const router = express.Router();

router.get('/', readPosts);

router.post('/', createPost);

router.put('/:id', updatePost);

router.delete('/:id', deletePost);


export default router;
