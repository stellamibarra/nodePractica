import {Router} from 'express';
import create from '../controllers/cities/create.js';
import destroy from '../controllers/cities/destroy.js';
import read from '../controllers/cities/read.js';
import readOne from '../controllers/cities/readOne.js';
import readById from '../controllers/cities/readById.js';

const cities_router = Router();

cities_router.post('/', create);
cities_router.delete('/:id', destroy);
 cities_router.get('/', read);
// cities_router.get('/:id',readOne)
// cities_router.get('/id/:id',readById)


export default cities_router;