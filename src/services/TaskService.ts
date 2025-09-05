import { TaskModel } from '../models/TaskModel';
import { Task, TaskCreate, TaskUpdate } from '../types/task';

export class TaskService {
  static async getAllTasks(): Promise<Task[]> {
    return TaskModel.getAll();
  }

  static async getTaskById(id: number): Promise<Task> {
    const task = await TaskModel.getById(id);
    if (!task) {
      throw new Error(`Task with ID ${id} not found`);
    }
    return task;
  }

  static async createTask(taskData: TaskCreate): Promise<Task> {
    // Basic validation
    if (!taskData.title || taskData.title.trim().length === 0) {
      throw new Error('Task title is required');
    }

    const result = await TaskModel.create(taskData);
    return result[0]; // Returning the first (and only) inserted task
  }

  static async updateTask(id: number, updates: TaskUpdate): Promise<Task> {
    // Check if task exists first
    const existingTask = await TaskModel.getById(id);
    if (!existingTask) {
      throw new Error(`Task with ID ${id} not found`);
    }

    const result = await TaskModel.update(id, updates);
    return result[0];
  }

  static async deleteTask(id: number): Promise<void> {
    const task = await TaskModel.getById(id);
    if (!task) {
      throw new Error(`Task with ID ${id} not found`);
    }

    await TaskModel.delete(id);
  }

  static async getTasksByStatus(status: Task['status']): Promise<Task[]> {
    // For now, we'll filter manually since we don't have this method in model
    const allTasks = await TaskModel.getAll();
    return allTasks.filter(task => task.status === status);
  }
}