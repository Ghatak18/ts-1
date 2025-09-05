"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const knex_1 = __importDefault(require("knex"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const db = (0, knex_1.default)({
    client: 'pg',
    connection: {
        connectionString: "postgresql://admin:0diMYXiNpAcNLIuwuUXRl6FifTiafKoV@dpg-d2s22jbipnbc73e5819g-a.oregon-postgres.render.com/scheduler_62sv",
        // ssl: {
        //   rejectUnauthorized: false // Required for Render
        // }
        ssl: true
    }
});
// Connection test (optional)
db.raw('SELECT 1')
    .then(() => console.log('Database connected'))
    .catch(err => console.log('Database connection failed:', err));
exports.default = db;
