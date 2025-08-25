import IssueItem from "./IssueItem";

const IssueList = ({ issues }) => {
  return (
    <ul>
      {issues.map((issue) => {
        return <IssueItem key={issue.id} issue={issue} />;
      })}
    </ul>
  );
};

export default IssueList;
