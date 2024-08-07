-- Queries for Meal
-- Get all meals
SELECT * FROM meal;

-- Add a new meal
INSERT INTO
    `meal` (
        `title`,
        `description`,
        `location`,
        `scheduled_at`,
        `max_reservations`,
        `price`
    )
VALUES (
        'Gourmet Burger Night',
        'Experience a variety of gourmet burgers with artisanal ingredients',
        'Burger Palace, Copenhagen',
        '2024-12-01 18:00:00',
        10,
        140.00
    );

-- Get a meal with any id
SELECT * FROM meal WHERE id = 5;

-- Update a meal with any id. Update any attribute fx the title or multiple attributes
UPDATE meal
SET
    title = 'Italian Feast v2.0',
    description = 'A refined evening of authentic Italian cuisine with a modern twist',
    price = 200.00
WHERE
    id = 4;

-- Delete a meal with any id
DELETE FROM meal WHERE id = 6;

-- Queries for Reservation
-- Get all reservations
SELECT * FROM reservation;

-- Add a new reservation
INSERT INTO
    `reservation` (
        `number_of_guests`,
        `meal_id`,
        `contact_phonenumber`,
        `contact_name`,
        `contact_email`
    )
VALUES (
        3,
        2,
        '+4512345678',
        'Alex Johnson',
        'alex.johnson@email.com'
    );

-- Get a reservation with any id
SELECT * FROM reservation WHERE id = 3;

-- Update a reservation with any id. Update any attribute fx the title or multiple attributes
UPDATE reservation SET number_of_guests = 3 WHERE id = 8;

UPDATE reservation
SET
    number_of_guests = 3,
    contact_email = 'newemail@example.com'
WHERE
    id = 4;

-- Delete a reservation with any id
DELETE FROM reservation WHERE id = 9;

-- Queries for Review
-- Get all reviews
SELECT * FROM review;

-- Add a new review
INSERT INTO
    `review` (
        `title`,
        `description`,
        `meal_id`,
        `stars`
    )
VALUES (
        'Not bad',
        'Too greasy for my taste',
        13,
        3
    );

-- Get a review with any id
SELECT * FROM review WHERE id = 5;

-- Update a review with any id. Update any attribute fx the title or multiple attributes
UPDATE review
SET
    title = 'Not Bad',
    description = 'The primary issue I had was with the burger texture. It was far too greasy for my taste, which made it difficult to enjoy.'
WHERE
    id = 9;

-- Delete a review with any id
DELETE FROM review WHERE id = 7;

-- Additional queries
-- Get meals that has a price smaller than a specific price
SELECT * FROM meal WHERE price < 250;

-- Get meals that still has available reservations
SELECT m.*, SUM(r.number_of_guests) AS total_guests
FROM meal m
    LEFT JOIN reservation r ON m.id = r.meal_id
GROUP BY
    m.id
HAVING
    total_guests < m.max_reservations
    OR total_guests IS NULL;

-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
SELECT * FROM meal WHERE title LIKE '%burger night%';

-- Get meals that has been created between two dates
SELECT *
FROM meal
WHERE
    created_at BETWEEN '2024-07-22 00:00:00' AND '2024-07-23 23:59:59';

-- Get only specific number of meals fx return only 5 meals
SELECT * FROM meal LIMIT 5;

-- Get the meals that have good reviews
SELECT m.*, AVG(r.stars) AS avg_rating
FROM meal m
    JOIN review r ON m.id = r.meal_id
GROUP BY
    m.id
HAVING
    avg_rating > 4;

-- Get reservations for a specific meal sorted by created_date
SELECT * FROM reservation WHERE meal_id = 2 ORDER BY created_at;

-- Sort all meals by average number of stars in the reviews
SELECT m.*, AVG(r.stars) AS avg_rating
FROM meal m
    LEFT JOIN review r ON m.id = r.meal_id
GROUP BY
    m.id
ORDER BY avg_rating DESC;