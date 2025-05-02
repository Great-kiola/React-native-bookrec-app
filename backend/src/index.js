import express from "express";
import "dotenv/config";
import { connectDB } from "./lib/db.js";
import cors from "cors";
// require('dotenv').config();


// routes
import authRoutes from "./routes/authRoutes.js";
import bookRoutes from "./routes/bookRoutes.js";

const app = express(); 
const PORT = process.env.PORT || 3000;

// app.use(express.json());
app.use(cors());

app.use(express.json({ limit: '20mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

app.use("/api/auth", authRoutes);
app.use("/api/books", bookRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});

