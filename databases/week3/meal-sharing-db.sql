CREATE DATABASE your_database_name CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

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