import express from "express";
import userModels from "../models/user-models.js";
const router = express.Router();



// Update user routes
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email, phone, message } = req.body;

  try {
    // // Check if user exists
    // const existingUser = await userModels.findById({_id : id});
    // if (!existingUser) {
    //   return res.status(404).json({
    //     status: "fail",
    //     message: "User not found",
    //   });
    // }

    // Update user
    const updatedUser = await userModels.findByIdAndUpdate(
      id,
      { name, email, phone, message },
      { new: true }
    );

    return res.status(200).json({
      status: "successful",
      data: updatedUser,
    });
  } catch (error) {
    return res.status(500).json({
      status: "fail",
      error: error.message,
    });
  }
});

export default router;
