import express from "express";
import { addStudent, viewStudent } from "../controllers/studentController.js";
import { authenticateToken, authorizeRoles } from "../middleware/auth.js";

const router = express.Router();

router.post("/addStudent", authenticateToken, authorizeRoles("principal", "supervisor", "teacher"), addStudent);
router.get("/viewStudent/:id", authenticateToken, authorizeRoles("principal", "supervisor", "teacher", "student"), viewStudent);

export default router;
