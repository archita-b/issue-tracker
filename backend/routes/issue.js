import express from "express";

import { createIssue, getIssues, updateIssue } from "../controller/issue.js";

const router = express.Router();

router.get("/issues", getIssues);
router.post("/issues", createIssue);
router.put("/issues/:id", updateIssue);

export default router;
