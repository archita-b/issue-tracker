import IssueItem from "./IssueItem";

const IssueList = ({ issues, onUpdate }) => {
  return (
    <ul>
      {issues.map((issue) => {
        return <IssueItem key={issue.id} issue={issue} onUpdate={onUpdate} />;
      })}
    </ul>
  );
};

export default IssueList;
