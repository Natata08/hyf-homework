CREATE DATABASE meal_sharing_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `meal` (
    `id` int AUTO_INCREMENT PRIMARY KEY,
    `title` varchar(255) NOT NULL,
    `description` text,
    `location` varchar(255) NOT NULL,
    `scheduled_at` datetime NOT NULL,
    `max_reservations` int NOT NULL,
    `price` decimal(10, 2) NOT NULL,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE `reservation` (
    `id` int AUTO_INCREMENT PRIMARY KEY,
    `number_of_guests` int NOT NULL,
    `meal_id` int NOT NULL,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `contact_phonenumber` varchar(255),
    `contact_name` varchar(255) NOT NULL,
    `contact_email` varchar(255),
    CONSTRAINT `fk_meal_reservation` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE
);

CREATE TABLE `review` (
    `id` int AUTO_INCREMENT PRIMARY KEY,
    `title` varchar(255),
    `description` text,
    `meal_id` int NOT NULL,
    `stars` int NOT NULL,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT `fk_meal_review` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE
);

-- Inserting some sample date into the tables
-- Meals
INSERT INTO
    `meal` (
        `title`,
        `description`,
        `location`,
        `scheduled_at`,
        `max_reservations`,
        `price`,
        `created_at`
    )
VALUES (
        'French Wine Tasting',
        'Experience the finest wines from various regions of France',
        'Le Petit Château, Copenhagen',
        '2024-10-05 20:00:00',
        15,
        399.00,
        '2024-07-01 09:15:00'
    ),
    (
        'Tapas Night',
        'Enjoy a variety of Spanish tapas with sangria',
        'Casa de Tapas, Aarhus',
        '2024-10-12 19:30:00',
        10,
        249.50,
        '2024-07-15 14:30:00'
    ),
    (
        'Seafood Extravaganza',
        'A feast of fresh seafood from the North Sea',
        'Ocean View Restaurant, Aalborg',
        '2024-10-20 18:00:00',
        8,
        499.99,
        '2024-06-01 11:45:00'
    );

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
        'Italian Feast',
        'A delightful evening of authentic Italian cuisine',
        'Ristorante Bella Italia, Copenhagen',
        '2024-08-15 19:00:00',
        30,
        299.99
    ),
    (
        'Sushi Masterclass',
        'Learn to make sushi from a master chef',
        'Sakura Sushi School, Aarhus',
        '2024-08-20 18:30:00',
        15,
        449.50
    ),
    (
        'BBQ Bonanza',
        'All-you-can-eat American-style BBQ',
        'Smokey Joe''s Grill, Odense',
        '2024-08-25 12:00:00',
        50,
        199.00
    ),
    (
        'Vegan Delight',
        'Explore the best of plant-based cuisine',
        'Green Leaf Cafe, Aalborg',
        '2024-09-01 19:30:00',
        25,
        279.00
    ),
    (
        'Danish Pastry Workshop',
        'Hands-on class to make traditional Danish pastries',
        'Copenhagen Bakery School',
        '2024-09-10 10:00:00',
        20,
        349.99
    );

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
        'Mexican Fiesta',
        NULL,
        'El Sombrero Grande, Odense',
        '2024-11-15 19:00:00',
        12,
        250.00
    ),
    (
        'Farm-to-Table Experience',
        NULL,
        'Green Acres Farm, Roskilde',
        '2024-11-22 18:30:00',
        15,
        100.00
    );

-- Reservations
INSERT INTO
    `reservation` (
        `number_of_guests`,
        `meal_id`,
        `created_at`,
        `contact_phonenumber`,
        `contact_name`,
        `contact_email`
    )
VALUES (
        3,
        2,
        '2024-07-01 14:30:00',
        NULL,
        'Laura Wilson',
        'laura.wilson@email.com'
    ),
    (
        5,
        3,
        '2024-07-19 09:15:00',
        '+4589012345',
        'Michael Brown',
        'michael.brown@email.com'
    ),
    (
        2,
        4,
        '2024-07-20 18:45:00',
        '+4590123456',
        'Emma Taylor',
        'emma.taylor@email.com'
    ),
    (
        4,
        5,
        '2024-07-21 11:00:00',
        '+4501234567',
        'Daniel Harris',
        NULL
    );

INSERT INTO
    `reservation` (
        `number_of_guests`,
        `meal_id`,
        `contact_phonenumber`,
        `contact_name`,
        `contact_email`
    )
VALUES (
        2,
        1,
        '+4512345678',
        'Jack Thompson',
        'jack.thompson@email.com'
    ),
    (
        4,
        1,
        '+4523456789',
        'Emily Parker',
        'emily.parker@email.com'
    ),
    (
        1,
        2,
        NULL,
        'Ryan Collins',
        'ryan.collins@email.com'
    ),
    (
        6,
        3,
        '+4545678901',
        'Olivia Bennett',
        'olivia.bennett@email.com'
    ),
    (
        3,
        4,
        '+4556789012',
        'Nathan Foster',
        'nathan.foster@email.com'
    ),
    (
        2,
        5,
        '+4567890123',
        'Sophie Mitchell',
        NULL
    );

-- Reviews
INSERT INTO
    `review` (
        `title`,
        `description`,
        `meal_id`,
        `stars`,
        `created_at`
    )
VALUES (
        'Unforgettable Wine Experience',
        'The French Wine Tasting event was simply magnificent. The sommelier was incredibly knowledgeable, and the selection of wines was exquisite. It was a perfect blend of education and enjoyment.',
        6,
        5,
        '2024-07-07 09:30:00'
    ),
    (
        'Tasty Tapas, but Room for Improvement',
        'The Tapas Night had a great variety of dishes, and the sangria was delicious. However, the service was a bit slow, and some tapas were lukewarm. Still, it was an enjoyable evening overall.',
        7,
        4,
        '2024-07-14 22:15:00'
    ),
    (
        'Seafood Paradise!',
        'The Seafood Extravaganza truly lived up to its name. Every dish was fresh, perfectly prepared, and bursting with flavor. The ocean view added to the ambiance. A bit pricey, but worth every penny for seafood lovers.',
        8,
        5,
        '2024-07-20 19:45:00'
    );

INSERT INTO
    `review` (
        `title`,
        `description`,
        `meal_id`,
        `stars`
    )
VALUES (
        NULL,
        'The food was exquisite and the atmosphere was perfect. Highly recommended!',
        1,
        5
    ),
    (
        'Great Sushi Experience',
        'Learned a lot and had fun. The instructor was very knowledgeable.',
        2,
        4
    ),
    (
        'Decent BBQ',
        'The food was good, but the place was a bit crowded. Still enjoyed it overall.',
        3,
        3
    ),
    (
        'Vegan Paradise',
        'As a vegan, I was impressed by the variety and taste of the dishes. Will come again!',
        4,
        5
    ),
    (
        NULL,
        'The instructor was patient and the pastries we made were delicious. Great morning activity!',
        5,
        4
    );