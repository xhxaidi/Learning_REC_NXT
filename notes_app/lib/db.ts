import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;

export async function connectDB() {
  try {
    const conn = await mongoose.connect(MONGODB_URI);
    console.log(conn);
  } catch (error) {
    throw new Error("DB connection failed", { cause: error });
  }
}
