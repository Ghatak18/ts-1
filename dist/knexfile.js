"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const config = {
    development: {
        client: 'pg',
        connection: {
            connectionString: process.env.DATABASE_URL + '?sslmode=require',
            //ssl: { rejectUnauthorized: false }
        },
        migrations: {
            directory: './migrations',
            extension: 'ts' // This is the key line
        },
        seeds: {
            directory: './seeds',
            extension: 'ts'
        }
    },
    production: {
        client: 'pg',
        connection: {
            connectionString: process.env.DB_CONNECTION_STRING,
            ssl: { rejectUnauthorized: false }
        },
        migrations: {
            directory: './migrations',
            extension: 'ts'
        }
    }
};
exports.default = config;
