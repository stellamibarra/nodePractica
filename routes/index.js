import {Router} from 'express';
import userRouter from './users.js';
import productRouter from './products.js';


const indexRouter = Router();

indexRouter.use('/auth', userRouter);
indexRouter.use('/products', productRouter);


export default indexRouter;