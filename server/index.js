import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import multer from "multer";
import { fileURLToPath } from "url";
import path from "path";

import dbConfig from "./config/dbConfig.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
f;

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// Routes
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

// Multer configuration for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/assets");
  },
  filename: (req, file, cb) => {
    const picturePath =
      new Date().toISOString().replace(/:/g, "-") + "-" + file.originalname;
    req.body.picturePath = picturePath;
    cb(null, picturePath);
  },
});

const upload = multer({ storage: storage });


// Error handling middleware
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong";
  return res.status(status).json({ message });
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log("server is running on port", port));
dbConfig();
