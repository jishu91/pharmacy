import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import messageRoutes from "./routes/messageRoutes.js";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api", messageRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});