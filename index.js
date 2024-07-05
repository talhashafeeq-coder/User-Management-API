import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userController from "./controllers/user-controllers.js";
import getUserController from "./controllers/getUser-controllers.js";
import userUpdateController from "./controllers/userUpdata-controllers.js";
import deleteUserController from "./controllers/deleteUser-controllers.js";

// Initialize app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Load environment variables
dotenv.config();
const port = process.env.PORT || 3000;

// Routes
app.use("/createuser/v1", userController);
app.use("/api/getuser/v1", getUserController);
// get user by id routes
// app.use ("/api/getuser/v1/:id", getUserController);
app.use("/api/updateuser/v1", userUpdateController);
app.use("/api/deleteuser/v1", deleteUserController);

// Database connection
mongoose
    .connect(process.env.MongoClient)
    .then(() => console.log("MongoDB connected successfully"))
    .catch((err) => console.log("MongoDB connection error: ", err));

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
