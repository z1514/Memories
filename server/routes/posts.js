import express from 'express';

import { getPosts, createPost, updatePost, deletePost, likePost} from '../controllers/posts.js';
const router = express.Router();

//localhost:5000/posts
//seperate the logics and routers
//get the posts
router.get('/', getPosts);

//create the posts
router.post('/', createPost);

// update the post
router.patch('/:id', updatePost);

// delete the post
router.delete('/:id', deletePost);

// add likes
router.patch('/:id/likePost', likePost);

export default router;