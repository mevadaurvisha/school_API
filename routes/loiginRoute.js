import express from 'express';
const loginRoutes = express.Router();
import {loginCon} from '../controllers/loginCon.js';

loginRoutes.post('/login' , loginCon);

export default loginRoutes;