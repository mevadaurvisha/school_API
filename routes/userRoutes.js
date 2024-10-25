import express  from "express";
import { addUser, updateUser, deleteUser } from "../controllers/userController.js";
import { authenticateToken, authorizeRoles } from "../middleware/auth.js";

const router = express.Router();

router.post("/addUser", authenticateToken, authorizeRoles("principal"), addUser);
router.put("/updateUser/:id", authenticateToken, authorizeRoles("principal", "supervisor"), updateUser);
router.delete("/deleteUser/:id", authenticateToken, authorizeRoles("principal", "supervisor"), deleteUser);

export default router;
