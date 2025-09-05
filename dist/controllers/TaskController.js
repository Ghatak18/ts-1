"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskController = void 0;
const TaskService_1 = require("../services/TaskService");
class TaskController {
    static async getAllTasks(req, res) {
        try {
            const tasks = await TaskService_1.TaskService.getAllTasks();
            res.json({
                success: true,
                data: tasks,
                count: tasks.length
            });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                error: error.message
            });
        }
    }
    static async getTaskById(req, res) {
        try {
            const task = await TaskService_1.TaskService.getTaskById(Number(req.params.id));
            res.json({
                success: true,
                data: task
            });
        }
        catch (error) {
            if (error.message.includes('not found')) {
                res.status(404).json({
                    success: false,
                    error: error.message
                });
            }
            else {
                res.status(500).json({
                    success: false,
                    error: error.message
                });
            }
        }
    }
    static async createTask(req, res) {
        try {
            const taskData = req.body;
            const newTask = await TaskService_1.TaskService.createTask(taskData);
            res.status(201).json({
                success: true,
                data: newTask,
                message: 'Task created successfully'
            });
        }
        catch (error) {
            if (error.message.includes('required')) {
                res.status(400).json({
                    success: false,
                    error: error.message
                });
            }
            else {
                res.status(500).json({
                    success: false,
                    error: error.message
                });
            }
        }
    }
    static async updateTask(req, res) {
        try {
            const updates = req.body;
            const updatedTask = await TaskService_1.TaskService.updateTask(Number(req.params.id), updates);
            res.json({
                success: true,
                data: updatedTask,
                message: 'Task updated successfully'
            });
        }
        catch (error) {
            if (error.message.includes('not found')) {
                res.status(404).json({
                    success: false,
                    error: error.message
                });
            }
            else {
                res.status(500).json({
                    success: false,
                    error: error.message
                });
            }
        }
    }
    static async deleteTask(req, res) {
        try {
            await TaskService_1.TaskService.deleteTask(Number(req.params.id));
            res.status(204).send(); // No content
        }
        catch (error) {
            if (error.message.includes('not found')) {
                res.status(404).json({
                    success: false,
                    error: error.message
                });
            }
            else {
                res.status(500).json({
                    success: false,
                    error: error.message
                });
            }
        }
    }
}
exports.TaskController = TaskController;
