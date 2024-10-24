import express from 'express';
const registerRoutes = express.Router();
import {registerCon, allregisteredUser, registeredUser, editUser, deleteUser} from '../controllers/registerCon.js';

registerRoutes.post('/register', registerCon);
registerRoutes.get('/register', allregisteredUser);
registerRoutes.get('/register/:id', registeredUser);
registerRoutes.put('/register/:id', editUser);
registerRoutes.delete('/register/:id', deleteUser);

export default registerRoutes;