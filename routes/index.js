import {Router} from 'express';
import userRouter from './users.js';
import itineraryRouter from './itineraries.js';
import cityRouter from './cities.js'
import router from './users.js';


const indexRouter = Router();

router.use(() => {})

indexRouter.use('/auth', userRouter);

indexRouter.use('/cities', cityRouter)
indexRouter.use('/itineraries', itineraryRouter);



export default indexRouter;
