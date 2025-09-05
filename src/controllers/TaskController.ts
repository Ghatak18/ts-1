import { Request, Response } from 'express';
import { TaskService } from '../services/TaskService';
import { TaskCreate, TaskUpdate } from '../types/task';

export class TaskController {
  static async getAllTasks(req: Request, res: Response): Promise<void> {
    try {
      const tasks = await TaskService.getAllTasks();
      res.json({
        success: true,
        data: tasks,
        count: tasks.length
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        error: error.message
      });
    }
  }

  static async getTaskById(req: Request, res: Response): Promise<void> {
    try {
      const task = await TaskService.getTaskById(Number(req.params.id));
      res.json({
        success: true,
        data: task
      });
    } catch (error: any) {
      if (error.message.includes('not found')) {
        res.status(404).json({
          success: false,
          error: error.message
        });
      } else {
        res.status(500).json({
          success: false,
          error: error.message
        });
      }
    }
  }

  static async createTask(req: Request, res: Response): Promise<void> {
    try {
      const taskData: TaskCreate = req.body;
      const newTask = await TaskService.createTask(taskData);
      
      res.status(201).json({
        success: true,
        data: newTask,
        message: 'Task created successfully'
      });
    } catch (error: any) {
      if (error.message.includes('required')) {
        res.status(400).json({
          success: false,
          error: error.message
        });
      } else {
        res.status(500).json({
          success: false,
          error: error.message
        });
      }
    }
  }

  static async updateTask(req: Request, res: Response): Promise<void> {
    try {
      const updates: TaskUpdate = req.body;
      const updatedTask = await TaskService.updateTask(Number(req.params.id), updates);
      
      res.json({
        success: true,
        data: updatedTask,
        message: 'Task updated successfully'
      });
    } catch (error: any) {
      if (error.message.includes('not found')) {
        res.status(404).json({
          success: false,
          error: error.message
        });
      } else {
        res.status(500).json({
          success: false,
          error: error.message
        });
      }
    }
  }

  static async deleteTask(req: Request, res: Response): Promise<void> {
    try {
      await TaskService.deleteTask(Number(req.params.id));
      
      res.status(204).send(); // No content
    } catch (error: any) {
      if (error.message.includes('not found')) {
        res.status(404).json({
          success: false,
          error: error.message
        });
      } else {
        res.status(500).json({
          success: false,
          error: error.message
        });
      }
    }
  }
}