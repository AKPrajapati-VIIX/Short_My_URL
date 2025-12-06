// import path from 'path';
// import dotenv from 'dotenv';

// ✅ Explicitly load the .env file from your project root
// const envPath = path.resolve(__dirname, '../.env');
// const result = dotenv.config({ path: envPath });

// ✅ Optional: Debug info
// if (result.error) {
//   console.error('❌ Error loading .env file:', result.error);
// } else {
//   console.log('✅ Environment variables loaded from', envPath);
//   console.log('PORT from .env:', process.env.PORT);
// }

// Define the ServerConfig type
type ServerConfig = {
  PORT: number;
  MONGO_URI: string;
  REDIS_URL: string;
  REDIS_COUNTER_KEY: string;
  BASE_URL: string;
};


// ✅ Create the config object using environment variables
export const serverConfig: ServerConfig = {
  PORT: Number(process.env.PORT) || 7777,
  MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/short_my_url',
  REDIS_URL: process.env.REDIS_URL || 'redis://localhost:6379',
  REDIS_COUNTER_KEY: process.env.REDIS_COUNTER_KEY || 'url_shortener_counter',
  BASE_URL: process.env.BASE_URL || 'http://localhost:7777',
};
