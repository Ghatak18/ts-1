// debug-env.ts
import dotenv from 'dotenv';

dotenv.config();

console.log('DB_CONNECTION_STRING:', process.env.DATABASE_URL);
console.log('Type of:', typeof process.env.DATABASE_URL);

// Check if it's undefined or malformed
if (!process.env.DATABASE_URL) {
  console.log('❌ DB_CONNECTION_STRING is undefined!');
} else if (!process.env.DATABASE_URL.includes('postgresql://')) {
  console.log('❌ DB_CONNECTION_STRING is malformed!');
  console.log('It should start with postgresql://');
}