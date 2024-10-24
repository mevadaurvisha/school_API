import express from 'express';
const loginRoutes = express.Router();
import {loginCon,getallLogins} from '../controllers/loginCon.js';
// import checkRole from '../middleware/auth.js';

loginRoutes.post('/login',   loginCon);
loginRoutes.get('/login' , getallLogins);

export default loginRoutes;