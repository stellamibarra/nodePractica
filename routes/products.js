import {Router} from 'express';
import create from '../controllers/products/create.js';
import createMany from '../controllers/products/createMany.js';

let productRouter = Router();

productRouter.post('/', create);
productRouter.post('/many', createMany);

export default productRouter;


