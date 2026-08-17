import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/hello_world");
        console.log("MongoDB connected");
    } catch (err) {
        console.log("MongoDB connection error:", err.message);
    }
};

export default connectDB;