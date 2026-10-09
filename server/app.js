require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const authRoutes = require("./routes/auth");
const studentRoutes = require("./routes/students");

const app = express();

// Lets Express read JSON from request bodies
app.use(express.json());

// CORS: allow the React app (port 5173) to call this API (port 3000)
app.use(
  cors({
    origin: "http://localhost:5173"
  })
);

app.use("/api/auth", authRoutes);
app.use("/api/students", studentRoutes);

app.get("/", (req, res) => {
  res.send("CSC220 Week 11 API is running");
});

// Any other route gets a 404
app.use((req, res) => {
  res.status(404).json({
    error: "Route not found"
  });
});

const PORT = process.env.PORT || 3000;

// Start the server only after MongoDB connects
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`API running on http://localhost:${PORT}`);
  });
});
