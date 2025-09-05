"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// debug-env.ts
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
console.log('DB_CONNECTION_STRING:', process.env.DATABASE_URL);
console.log('Type of:', typeof process.env.DATABASE_URL);
// Check if it's undefined or malformed
if (!process.env.DATABASE_URL) {
    console.log('❌ DB_CONNECTION_STRING is undefined!');
}
else if (!process.env.DATABASE_URL.includes('postgresql://')) {
    console.log('❌ DB_CONNECTION_STRING is malformed!');
    console.log('It should start with postgresql://');
}
