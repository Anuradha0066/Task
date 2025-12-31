import express from "express";
import {
  getTasks,
  createTask,
  deleteTask,
  completeTask,
} from "../controllers/taskController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.use(protect);

router.get("/", getTasks);
router.post("/", createTask);
router.delete("/:id", deleteTask);
router.patch("/:id", completeTask);

export default router;
