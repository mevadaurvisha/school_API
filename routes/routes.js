import express from 'express';
const routes = express.Router();
import principalRoutes from './principal.js';

routes.use('/principal', principalRoutes);

export default routes;