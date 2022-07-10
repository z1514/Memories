import express from 'express';

import { signin, signup } from '../controllers/user.js';

const router = express.Router();

//localhost:5000/users
//seperate the logics and routers
router.post('/signin', signin);
router.post('/signup', signup);

export default router;