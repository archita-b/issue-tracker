const baseUrl = "http://localhost:5000/api";

export async function fetchIssues() {
  const response = await fetch(baseUrl);
  const issues = await response.json();
  return issues;
}
