import { Router } from 'express';
import create from '../controllers/users/create.js';

let router = Router();

router.post('/', create);
// router.get('/', index);
// router.put('/:id', update);
// router.delete('/:id', destroy);

export default router;