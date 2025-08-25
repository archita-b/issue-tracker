import { useState, useEffect } from "react";

import "./App.css";
import IssueList from "./components/IssueList";
import IssueForm from "./components/IssueForm";
import Navbar from "./components/Navbar";
import { createIssue, fetchIssues, updateIssue } from "./requests";

function App() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    fetchIssues().then((issues) => setIssues(issues));
  }, []);

  function addIssue(title) {
    const newIssue = {
      title: title,
      status: "pending",
    };
    createIssue(newIssue).then((addedIssue) =>
      setIssues((currentIssues) => {
        return [...currentIssues, { ...newIssue, ...addedIssue }];
      })
    );
  }

  function updateIssueHandler(id, updates) {
    updateIssue(id, updates).then((updated) => {
      setIssues((currentIssues) => {
        return currentIssues.map((issue) =>
          issue.id === id ? { ...issue, ...updated } : issue
        );
      });
    });
  }

  return (
    <>
      <Navbar />
      <IssueForm addIssue={addIssue} />
      <IssueList issues={issues} onUpdate={updateIssueHandler} />
    </>
  );
}

export default App;
