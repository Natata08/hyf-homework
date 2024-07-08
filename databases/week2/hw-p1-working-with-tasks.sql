-- Active: 1719746560269@@127.0.0.1@3306@hyf

-- Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
INSERT INTO
    task (
        title,
        description,
        created,
        updated,
        due_date,
        status_id,
        user_id
    )
VALUES (
        'Learn Danish',
        'Practice speaking with locals',
        NOW(),
        NOW(),
        '2024-12-08 00:00:00',
        1,
        6
    );

--Change the title of a task
UPDATE task
SET
    title = 'Repair the current phone',
    updated = NOW()
WHERE
    id = 23;

-- Change a task due date
UPDATE task
SET
    due_date = '2024-08-10 00:00:00',
    updated = NOW()
WHERE
    id = 10;

-- Change a task status
UPDATE task
SET
    status_id = (
        SELECT id
        FROM status
        WHERE
            name = 'Not started'
    ),
    updated = NOW()
WHERE
    id = 9;

-- Mark a task as complete
UPDATE task
SET
    status_id = (
        SELECT id
        FROM status
        WHERE
            name = 'Done'
    ),
    updated = NOW()
WHERE
    id = 4;

-- Delete a task
DELETE FROM task WHERE id = 34;