import mongoose from 'mongoose';

const connectDB = async (): Promise<void> => {
  const uri =
    process.env.NODE_ENV === 'development'
      ? process.env.MONGO_URI_ATLAS
      : process.env.MONGO_URI_LOCAL;

  try {
    await mongoose.connect(uri as string);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
};

export default connectDB;
