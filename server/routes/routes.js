import express from 'express';
const router = express.Router();

import authRouter from '../app/routers/authRouter.js'
import categoriesRouter from '../app/routers/categoriesRouter.js'
import challangesRouter from '../app/routers/challangesRouter.js'

const apiRoutes = [
    {
        path: '/auth',
        route: authRouter,
    },
    {
        path: '/categories',
        route: categoriesRouter,
    },
    {
        path: '/challenges',
        route: challangesRouter,
    }
 
];

apiRoutes.forEach(route => router.use(route.path, route.route));
export default router;