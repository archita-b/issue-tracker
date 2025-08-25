import express from "express";
import cors from "cors";
import path from "path";

import issueRouter from "./routes/issue.js";

const app = express();
const port = process.env.PORT || 5000;

const __dirname = path.resolve();

app.use(cors());
app.use(express.json());

app.use("/api", issueRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
