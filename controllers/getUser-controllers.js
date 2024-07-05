// get User controller
import express from "express";
import userModels from "../models/user-models.js";
const router = express.Router();

//Get user by id routes
// router.get("/:id", async (req, res) => {
//     const { id } = req.params;
//     try {
//         const user = await userModels.findById(id);
//         return res.status(200).json({
//             status: "successful",
//             data: user
//         });
//     } catch (error) {
//         return res.status(500).json({
//             status: "fail",
//             error: error.message,
//         });
//     }
// });

// Get user routes
router.get("/:id", async (req, res) => {
    try {
        // get id
        const { id } = req.params;
        // get user by id
        const user = await userModels.findById(id);
        res.json({
            status: "successful",
            success: true,
            data: user
        });
    } catch (error) {
        res.status(500).json({
            status: "fail",
            success: false,
            error: error.message
        });
    }
});

router.get("/", async (req, res) => {
    try {
        const users = await userModels.find();
        res.json({
            status: "successful",
            success: true,
            data: users
        });
    } catch (error) {
        res.status(500).json({
            status: "fail",
            success: false,
            error: error.message
        });
    }
});
export default router;