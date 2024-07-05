// delete User controller
import express from "express";
import userModels from "../models/user-models.js";
const router = express.Router();

// Delete user routes
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        // Check if user exists
        const existingUser = await userModels.findById(id);
        if (!existingUser) {
            return res.status(404).json({
                status: "fail",
                message: "User not found",
            });
        }
        // Delete user
        await userModels.findByIdAndDelete(id);
        return res.status(200).json({
            status: "successful",
            message: "User deleted successfully",
        });
    } catch (error) {
        return res.status(500).json({
            status: "fail",
            error: error.message,
        });
    }
});

export default router;