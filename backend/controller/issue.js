import { createIssueDB, getIssuesDB, updateIssueDB } from "../model/issue.js";

export async function getIssues(req, res) {
  try {
    const issues = await getIssuesDB();
    res.status(200).json(issues);
  } catch (error) {
    console.log("Error in getIssues controller", error.message);
  }
}

export async function createIssue(req, res) {
  try {
    const title = req.body?.title;

    if (!title) {
      return res.status(400).json({ error: "Title is required." });
    }

    const newIssue = await createIssueDB(title);
    res.status(201).json(newIssue);
  } catch (error) {
    console.log("Error in createIssue controller", error.message);
  }
}

export async function updateIssue(req, res) {
  try {
    const { id: issueId } = req.params;
    const { title, status } = req.body;

    if (!title || !status) {
      return res
        .status(400)
        .json({ error: "Missing information to be updated." });
    }

    const updatedIssue = await updateIssueDB(title, status, issueId);
    res.status(200).json(updatedIssue);
  } catch (error) {
    console.log("Error in updateIssue controller", error.message);
  }
}
