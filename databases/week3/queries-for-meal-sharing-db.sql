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