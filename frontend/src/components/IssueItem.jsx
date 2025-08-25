import React from "react";

const IssueItem = ({ issue }) => {
  return (
    <div>
      <div>{issue.status}</div>
      <div>{issue.title}</div>
    </div>
  );
};

export default IssueItem;
