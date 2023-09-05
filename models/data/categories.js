import 'dotenv/config.js';
import '../../config/database.js';
import Category from '../Category.js';

let categories = [
    {
        name: 'Category 1',
        color: 'red',
        create_by: '60b9b8b9e0b9a83f1c1b3b1a'
    },
    {
        name: 'Category 2',
        color: 'blue',
        create_by: '60b9b8b9e0b9a83f1c1b3b1a'
    }
];

Category.insertMany(categories)