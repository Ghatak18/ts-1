import express, { Request, Response } from 'express';
import slotsRoutes from './routes/slotsRoutes';
import dotenv from 'dotenv';
dotenv.config();
import db from './db';

const app = express();
const PORT = 3000;
app.use(express.json());
db();
app.use('/slots', slotsRoutes);
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