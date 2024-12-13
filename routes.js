import express from "express";
import { healthCheck, runProjectOnAWS } from "./controllers.js";
const router = express.Router();

router.route("/health-check").get(healthCheck);
router.route("/run-project").post(runProjectOnAWS);

export default router;
