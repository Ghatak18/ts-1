"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.up = up;
exports.down = down;
async function up(knex) {
    return knex.schema.createTable('tasks', (table) => {
        table.increments('id').primary();
        table.string('title').notNullable();
        table.text('description').nullable();
        table.enum('status', ['pending', 'in_progress', 'completed']).defaultTo('pending');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
        table.index('status');
    });
}
async function down(knex) {
    return knex.schema.dropTableIfExists('tasks');
}
