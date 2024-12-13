import express from "express";
import colors from "colors";
import routes from "./routes.js";
import bodyParser from "body-parser";
import "dotenv/config";
import Redis from "ioredis";
import connectDB from "./utils/dbConnect.js";

const app = express();
const port = process.env.PORT || 8000;

export const redis = new Redis();
connectDB();

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.use("/api/v1/", routes);

app.listen(port, () => console.log(`Server is running on port : ${port}`));
