import db from '../db';
import {Task, TaskCreate, TaskUpdate} from '../types/task';
const TABLE_NAME = 'tasks';

export const TaskModel = {
     async getAll(): Promise<Task[]> {
    return db(TABLE_NAME).select('*');
  },

  // GET BY ID
  async getById(id: number): Promise<Task | undefined> {
    return db(TABLE_NAME).where({ id }).first();
  },

  // CREATE
  async create(taskData: TaskCreate): Promise<Task[]> {
    return db(TABLE_NAME)
      .insert(taskData)
      .returning('*');
  },

  // UPDATE
  async update(id: number, updates: TaskUpdate): Promise<Task[]> {
    return db(TABLE_NAME)
      .where({ id })
      .update({
        ...updates,
        updated_at: new Date() // Auto-update timestamp
      })
      .returning('*');
  },

  // DELETE
  async delete(id: number): Promise<number> {
    return db(TABLE_NAME)
      .where({ id })
      .del();
  },
};