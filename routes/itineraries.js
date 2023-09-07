import {Router} from 'express';
import create from '../controllers/itineraries/createOne.js';
import createMany from '../controllers/itineraries/createMany.js';
import read from '../controllers/itineraries/read.js';
let itinerary_Router = Router();

itinerary_Router.get('/',read)
itinerary_Router.post('/', create);
// itineraryRouter.post('/many', createMany);

export default itinerary_Router;


