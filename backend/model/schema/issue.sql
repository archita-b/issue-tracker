CREATE TABLE issue (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    status VARCHAR(255) DEFAULT 'pending' CHECK (status IN ('pending', 'in progress','completed')),
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP 
);

CREATE TABLE assignees (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    issue_id INTEGER REFERENCES issue(id)
);