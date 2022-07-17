import express from 'express';

import { commentPost, getPostsBySearch, getPosts, getPost, createPost, updatePost, deletePost, likePost } from '../controllers/posts.js';

import auth from '../middleware/auth.js';

const router = express.Router();

//localhost:5000/posts
//seperate the logics and routers

//get the search posts
router.get('/search', getPostsBySearch);

//get the posts
router.get('/', getPosts);

//get the post
router.get('/:id', getPost);

//create the posts
router.post('/', auth, createPost);

// update the post
// the front end won't show the posts not yours
router.patch('/:id', auth, updatePost);

// delete the post
router.delete('/:id', auth, deletePost);

// add likes
router.patch('/:id/likePost', auth, likePost);

// add comments
router.post('/:id/commentPost', auth, commentPost);

export default router;