import dotenv from 'dotenv';

dotenv.config();

// Export configuration variables
export const config = {
  PORT: process.env.PORT || 5000,
  MONGO_URI:
    process.env.MONGO_URI_ATLAS || 'mongodb://localhost:27017/bicycle-store',
};
