import asyncHandler from "express-async-handler";

export const healthCheck = asyncHandler(async (req, res) => {
  try {
    res.status(200).json({
      status: "ok",
    });
  } catch (err) {
    res.status(500).json({
      message: "SOmething went wrong",
    });
  }
});
