import pool from "./database.js";

export async function getIssuesDB() {
  const result = await pool.query(`SELECT * FROM issue`);
  return result.rows;
}

export async function createIssueDB(title) {
  const result = await pool.query(
    `INSERT INTO issue (title) VALUES ($1) RETURNING *`,
    [title]
  );

  if (result.rowCount !== 1) throw new Error("Error creating new issue");

  return result.rows[0];
}

export async function updateIssueDB(title, status, issueId) {
  const result = await pool.query(
    `UPDATE issue SET title = $1, status = $2, updated_at = NOW() 
     WHERE id = $3 RETURNING *`,
    [title, status, issueId]
  );

  if (result.rowCount !== 1) throw new Error("Error updating issue");

  return result.rows[0];
}
