-- Active: 1719746560269@@127.0.0.1@3306@hyf

-- 1. Find out how many tasks are in the task table
SELECT COUNT(*) AS total_task FROM task;

-- 2. Find out how many tasks in the task table do not have a valid due date
SELECT COUNT(*) AS total_invalid_due_date
FROM task
WHERE
    due_date IS NULL;

-- 3. Find all the tasks that are marked as done
SELECT *
FROM task t
    JOIN status s ON t.status_id = s.id
WHERE
    s.name = 'Done';

-- 4. Find all the tasks that are not marked as done
SELECT *
FROM task t
    JOIN status s ON t.status_id = s.id
WHERE
    NOT s.name = 'Done';

-- 5. Get all the tasks, sorted with the most recently created first
SELECT * FROM task ORDER BY created DESC;

-- 6. Get the single most recently created task
SELECT * FROM task ORDER BY created DESC LIMIT 1;

-- 7. Get the title and due date of all tasks where the title or description contains database
SELECT title, due_date
FROM task
WHERE
    title LIKE '%database%'
    OR description LIKE '%database%';

-- 8. Get the title and status (as text) of all tasks
SELECT t.title, s.name
FROM task t
    LEFT JOIN status s ON t.status_id = s.id;

-- 9. Get the name of each status, along with a count of how many tasks have that status
SELECT s.name AS status_name, COUNT(*) AS task_count
FROM task t
    JOIN status s ON t.status_id = s.id
GROUP BY
    s.name;

-- 10. Get the names of all statuses, sorted by the status with most tasks first
SELECT s.name AS status_name, COUNT(*) AS task_count
FROM task t
    JOIN status s ON t.status_id = s.id
GROUP BY
    s.name
ORDER BY task_count DESC;