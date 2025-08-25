import { useState } from "react";

import "./issueform.css";

const IssueForm = ({ addIssue }) => {
  const [newIssue, setNewIssue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (newIssue.trim() === "") return;

    addIssue(newIssue);
    setNewIssue("");
  }

  return (
    <div className="issue-form">
      <form onSubmit={handleSubmit}>
        <input
          value={newIssue}
          placeholder="create an issue"
          type="text"
          onChange={(e) => setNewIssue(e.target.value)}
        />
        <button>new issue</button>
      </form>
    </div>
  );
};

export default IssueForm;
