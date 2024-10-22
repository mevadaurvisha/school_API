import express from 'express';
import {addUser} from '../controllers/principalCon.js';
const routes = express.Router();
// import authorizeRoles from '../middleware/auth.js';

routes.post('/add-user' ,  addUser);

export default routes;