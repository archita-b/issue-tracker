import { useState, useEffect } from "react";

import { fetchIssues } from "../requests";
import IssueItem from "./IssueItem";

const Issue = () => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    fetchIssues().then((issues) => setIssues(issues));
  }, [issues]);

  return (
    <ul>
      {issues.map((issue) => {
        return <IssueItem key={issue.id} issue={issue} />;
      })}
    </ul>
  );
};

export default Issue;
