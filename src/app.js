import "dotenv/config";
import express from "express";
import connectDB from "./config/database.config.js";

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
