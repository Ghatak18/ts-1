import express from 'express';
import { TaskController } from '../controllers/TaskController';

const router = express.Router();

// GET /api/tasks - Get all tasks
router.get('/', TaskController.getAllTasks);

// GET /api/tasks/:id - Get task by ID
router.get('/:id', TaskController.getTaskById);

// POST /api/tasks - Create new task
router.post('/', TaskController.createTask);

// PUT /api/tasks/:id - Update task
router.put('/:id', TaskController.updateTask);

// DELETE /api/tasks/:id - Delete task
router.delete('/:id', TaskController.deleteTask);

export default router;