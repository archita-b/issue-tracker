import "./issuelist.css";
import IssueItem from "./IssueItem";

const IssueList = ({ issues, onUpdate }) => {
  return (
    <ul className="issue-list">
      {issues.map((issue) => {
        return <IssueItem key={issue.id} issue={issue} onUpdate={onUpdate} />;
      })}
    </ul>
  );
};

export default IssueList;
