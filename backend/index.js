import express from "express";

import issueRouter from "./routes/issue.js";

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.use("/api", issueRouter);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
