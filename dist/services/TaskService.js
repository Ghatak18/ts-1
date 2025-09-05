"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskService = void 0;
const TaskModel_1 = require("../models/TaskModel");
class TaskService {
    static async getAllTasks() {
        return TaskModel_1.TaskModel.getAll();
    }
    static async getTaskById(id) {
        const task = await TaskModel_1.TaskModel.getById(id);
        if (!task) {
            throw new Error(`Task with ID ${id} not found`);
        }
        return task;
    }
    static async createTask(taskData) {
        // Basic validation
        if (!taskData.title || taskData.title.trim().length === 0) {
            throw new Error('Task title is required');
        }
        const result = await TaskModel_1.TaskModel.create(taskData);
        return result[0]; // Returning the first (and only) inserted task
    }
    static async updateTask(id, updates) {
        // Check if task exists first
        const existingTask = await TaskModel_1.TaskModel.getById(id);
        if (!existingTask) {
            throw new Error(`Task with ID ${id} not found`);
        }
        const result = await TaskModel_1.TaskModel.update(id, updates);
        return result[0];
    }
    static async deleteTask(id) {
        const task = await TaskModel_1.TaskModel.getById(id);
        if (!task) {
            throw new Error(`Task with ID ${id} not found`);
        }
        await TaskModel_1.TaskModel.delete(id);
    }
    static async getTasksByStatus(status) {
        // For now, we'll filter manually since we don't have this method in model
        const allTasks = await TaskModel_1.TaskModel.getAll();
        return allTasks.filter(task => task.status === status);
    }
}
exports.TaskService = TaskService;
