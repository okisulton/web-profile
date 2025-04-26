import mongoose from 'mongoose';

// MongoDB connection string - this should be in environment variables in production
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/oki-portfolio';

// Cache the MongoDB connection to reuse it across API calls
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }
  
  cached.conn = await cached.promise;
  return cached.conn;
}