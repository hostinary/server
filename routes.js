import express from "express";
import { healthCheck } from "./controllers.js";
const router = express.Router();

router.route("/health-check").get(healthCheck);

export default router;
