import express from "express";
import userModels from "../models/user-models.js";
const router = express.Router();

// Create user routes
router.post("/", async (req, res) => {
    const { name, email, phone, message } = req.body;
    try {
        // Check if user already exists
        const existingUser = await userModels.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                 message: 'User already exists',
                status: 'fail'
               
            });
        }

        // Create new user
        const newUser = await userModels.create({ name, email, phone, message });

        return res.status(201).json({
            status: "successful",
            data: newUser,
        });
    } catch (error) {
        return res.status(500).json({
            status: "fail",
            error: error.message,
        });
    }
});

export default router;
