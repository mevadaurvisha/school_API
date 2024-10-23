import express from 'express';
import {addUser} from '../controllers/principalCon.js';
const principalRoutes = express.Router();
// import authorizeRoles from '../middleware/auth.js';

principalRoutes.post('/principal' ,  addUser);

export default principalRoutes;