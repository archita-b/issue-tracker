const baseUrl = "http://localhost:5000/api";

export async function fetchIssues() {
  const response = await fetch(`${baseUrl}/issues`);
  const issues = await response.json();
  return issues;
}

export async function createIssue(newIssue) {
  const response = await fetch(`${baseUrl}/issues`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(newIssue),
  });
  const addedIssue = await response.json();
  return addedIssue;
}

export async function updateIssue(issueId, updates) {
  const response = await fetch(`${baseUrl}/issues/${issueId}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(updates),
  });
  const updatedIssue = await response.json();
  return updatedIssue;
}
