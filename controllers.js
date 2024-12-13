import asyncHandler from "express-async-handler";
import slugGenerator from "./utils/slugGenerator.js";

export const runProjectOnAWS = asyncHandler(async (req, res) => {
  try {
    const { gitURL } = req.body;

    slugGenerator();

    res.status(200).json({
      status: "ok",
      message: "success",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error,
    });
  }
});

export const healthCheck = asyncHandler(async (req, res) => {
  try {
    res.status(200).json({
      status: "ok",
    });
  } catch (err) {
    res.status(500).json({
      message: "Something went wrong",
    });
  }
});
