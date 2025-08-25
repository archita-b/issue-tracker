import { useState, useEffect } from "react";

import "./App.css";
import IssueList from "./components/IssueList";
import { fetchIssues } from "./requests";

function App() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    fetchIssues().then((issues) => setIssues(issues));
  }, [issues]);

  return (
    <>
      <IssueList issues={issues} />
    </>
  );
}

export default App;
