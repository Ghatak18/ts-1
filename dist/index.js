"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const slotsRoutes_1 = __importDefault(require("./routes/slotsRoutes"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const db_1 = __importDefault(require("./db"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
(0, db_1.default)();
app.use('/slots', slotsRoutes_1.default);
// Health check endpoint
// app.get('/health', (req, res) => {
//   res.json({ 
//     status: 'OK', 
//     message: 'Server is running',
//     timestamp: new Date().toISOString()
//   });
// });
// // 404 handler
// app.use('*', (req, res) => {
//   res.status(404).json({
//     success: false,
//     error: 'Endpoint not found'
//   });
// });
// // Error handling middleware
// app.use((error: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
//   console.error('Error:', error);
//   res.status(500).json({
//     success: false,
//     error: 'Internal server error'
//   });
// });
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📊 Health check: http://localhost:${PORT}/health`);
    console.log(`📝 Tasks API: http://localhost:${PORT}/api/tasks`);
});
