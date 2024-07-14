-- Get all the tasks assigned to users whose email ends in @spotify.com
SELECT t.*
FROM
    task t
    JOIN user_task ut ON t.id = ut.task_id
    JOIN user u ON u.id = ut.user_id
WHERE
    u.email LIKE '%@spotify.com';

-- Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT t.*
FROM
    task t
    JOIN user_task ut ON t.id = ut.task_id
    JOIN user u ON u.id = ut.user_id
    JOIN status s ON s.id = t.status_id
WHERE
    u.name = 'Donald Duck'
    AND s.name = 'Not started';

-- Get all the tasks for 'Maryrose Meadows' that were created in september
SELECT t.*
FROM
    task t
    JOIN user_task ut ON t.id = ut.task_id
    JOIN user u ON u.id = ut.user_id
    JOIN status s ON s.id = t.status_id
WHERE
    u.name = 'Maryrose Meadows'
    AND MONTH(t.created) = 9;

-- Find how many tasks where created in each month
SELECT MONTH(created) AS month_number, COUNT(*) AS task_count
FROM task
GROUP BY
    month_number;