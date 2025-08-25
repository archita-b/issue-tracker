import { useState, useEffect } from "react";

import "./App.css";
import IssueList from "./components/IssueList";
import IssueForm from "./components/IssueForm";
import Navbar from "./components/Navbar";
import { createIssue, fetchIssues } from "./requests";

function App() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    fetchIssues().then((issues) => setIssues(issues));
  }, [issues]);

  function addIssue(title) {
    const newIssue = {
      title: title,
      status: "",
    };
    createIssue(newIssue).then((addedIssue) =>
      setIssues((currentIssues) => {
        return [...currentIssues, { ...newIssue, ...addedIssue }];
      })
    );
  }

  return (
    <>
      <Navbar />
      <IssueForm addIssue={addIssue} />
      <IssueList issues={issues} />
    </>
  );
}

export default App;
