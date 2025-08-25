import { useState } from "react";

const IssueItem = ({ issue, onUpdate }) => {
  const [title, setTitle] = useState(issue.title);
  const [status, setStatus] = useState(issue.status);
  const [isEditing, setIsEditing] = useState(false);

  function handleSave() {
    onUpdate(issue.id, { title, status });
    setIsEditing(false);
  }

  return (
    <div>
      {isEditing ? (
        <>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="pending">Pending</option>
            <option value="in progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <div>{issue.status}</div>
          <div>{issue.title}</div>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
    </div>
  );
};

export default IssueItem;
