import express from "express";
import routes from "./routes.js";

const app = express();
const port = process.env.PORT || 8000;

app.use("/api/v1/", routes);

app.listen(port, () => console.log(`Server is running on port :`, port));
