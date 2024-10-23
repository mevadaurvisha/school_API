import express from 'express';
const registerRoutes = express.Router();
import {registerCon, allregisteredUser} from '../controllers/registerCon.js';

registerRoutes.post('/register', registerCon);
registerRoutes.get('/register', allregisteredUser);

export default registerRoutes;