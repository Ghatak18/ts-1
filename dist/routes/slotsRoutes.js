"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const TaskController_1 = require("../controllers/TaskController");
const router = express_1.default.Router();
// GET /api/tasks - Get all tasks
router.get('/', TaskController_1.TaskController.getAllTasks);
// GET /api/tasks/:id - Get task by ID
router.get('/:id', TaskController_1.TaskController.getTaskById);
// POST /api/tasks - Create new task
router.post('/', TaskController_1.TaskController.createTask);
// PUT /api/tasks/:id - Update task
router.put('/:id', TaskController_1.TaskController.updateTask);
// DELETE /api/tasks/:id - Delete task
router.delete('/:id', TaskController_1.TaskController.deleteTask);
exports.default = router;
