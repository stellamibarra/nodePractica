import {Router} from 'express';
import userRouter from './users.js';

const router = Router();

router.use('/auth', userRouter);
// router.use('/products', userRouter);


export default router;