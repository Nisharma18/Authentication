import mongoose from 'mongoose';

const connectDB = async (DATABASE_URL) => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log(`Connected Successfully... ${mongoose.Connection.host}`)
  } catch (error) {
    console.log(`mongodb database error ${error}`)
  }
}

export default connectDB

