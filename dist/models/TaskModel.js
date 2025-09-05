"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskModel = void 0;
const db_1 = __importDefault(require("../db"));
const TABLE_NAME = 'tasks';
exports.TaskModel = {
    async getAll() {
        return (0, db_1.default)(TABLE_NAME).select('*');
    },
    // GET BY ID
    async getById(id) {
        return (0, db_1.default)(TABLE_NAME).where({ id }).first();
    },
    // CREATE
    async create(taskData) {
        return (0, db_1.default)(TABLE_NAME)
            .insert(taskData)
            .returning('*');
    },
    // UPDATE
    async update(id, updates) {
        return (0, db_1.default)(TABLE_NAME)
            .where({ id })
            .update({
            ...updates,
            updated_at: new Date() // Auto-update timestamp
        })
            .returning('*');
    },
    // DELETE
    async delete(id) {
        return (0, db_1.default)(TABLE_NAME)
            .where({ id })
            .del();
    },
};
