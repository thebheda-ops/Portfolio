import "dotenv/config";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import healthRouter from "./routes/health.js";

const app = express();
const port = process.env.PORT || 5000;
const mongoUri = process.env.MONGODB_URI;
const clientOrigin = process.env.CLIENT_ORIGIN || "http://localhost:5173";

app.use(cors({ origin: clientOrigin }));
app.use(express.json());

app.use("/api/health", healthRouter);

app.get("/api", (_req, res) => {
  res.json({ message: "Backend is running" });
});

async function start() {
  try {
    if (mongoUri) {
      await mongoose.connect(mongoUri);
      console.log("MongoDB connected");
    } else {
      console.log("MONGODB_URI missing: running without DB connection");
    }

    app.listen(port, () => {
      console.log(`API listening on port ${port}`);
    });
  } catch (error) {
    console.error("Startup error:", error);
    process.exit(1);
  }
}

start();
