import express from 'express';

import { getPosts, createPost} from '../controllers/posts.js';
const router = express.Router();

//localhost:5000/posts
//seperate the logics and routers
//get the posts
router.get('/', getPosts);

//create the posts
router.post('/', createPost);

export default router;