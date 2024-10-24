import express from 'express';
const routes = express.Router();
import principalRoutes from './principal.js';
import loginRoutes from './loiginRoute.js';
import registerRoutes from './registerRoute.js';

routes.use('/', principalRoutes);
routes.use('/' , loginRoutes);
routes.use('/' , registerRoutes);

export default routes;