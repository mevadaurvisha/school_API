import express from "express";
import { register, login , allRegisterdUser} from "../controllers/authController.js";

const router = express.Router();

router.post("/register", register);  
router.get("/register", allRegisterdUser);  
router.post("/login", login);  

export default router;
