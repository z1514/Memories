import express from 'express';

import { getPosts, createPost, updatePost, deletePost, likePost } from '../controllers/posts.js';

import auth from '../middleware/auth.js';

const router = express.Router();

//localhost:5000/posts
//seperate the logics and routers
//get the posts
router.get('/', getPosts);

//create the posts
router.post('/', auth, createPost);

// update the post
// the front end won't show the posts not yours
router.patch('/:id', auth, updatePost);

// delete the post
router.delete('/:id', auth, deletePost);

// add likes
router.patch('/:id/likePost', auth, likePost);

export default router;