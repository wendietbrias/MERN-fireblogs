require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./db/connect");

const postRoutes = require("./routes/post");
const userRoutes = require("./routes/auth");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "PUT", "PATCH"],
  })
);
app.use("/api/auth", userRoutes);
app.use("/api/post", postRoutes);

(() => connectDB(app))();
