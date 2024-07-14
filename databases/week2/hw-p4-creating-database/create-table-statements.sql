CREATE TABLE `artist` (
    `artist_id` int NOT NULL AUTO_INCREMENT,
    `name` varchar(100) NOT NULL,
    `country` varchar(100) DEFAULT NULL,
    `email` varchar(45) DEFAULT NULL,
    PRIMARY KEY (`artist_id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

CREATE TABLE `artwork` (
    `artwork_id` int NOT NULL AUTO_INCREMENT,
    `title` varchar(100) DEFAULT NULL,
    `year` INT DEFAULT NULL,
    `price` decimal(10, 2) DEFAULT NULL,
    `artist_id` int NOT NULL,
    PRIMARY KEY (`artwork_id`),
    CONSTRAINT `fk_artist_artwork` FOREIGN KEY (`artist_id`) REFERENCES `artist` (`artist_id`) ON DELETE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

CREATE TABLE `curator` (
    `curator_id` int NOT NULL AUTO_INCREMENT,
    `name` varchar(100) NOT NULL,
    `email` varchar(100) DEFAULT NULL,
    `phone` varchar(100) DEFAULT NULL,
    PRIMARY KEY (`curator_id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

CREATE TABLE `exhibition` (
    `exhibition_id` int NOT NULL AUTO_INCREMENT,
    `theme` varchar(100) NOT NULL,
    `start_date` DATE DEFAULT NULL,
    `end_date` DATE DEFAULT NULL,
    `curator_id` int DEFAULT NULL,
    PRIMARY KEY (`exhibition_id`),
    CONSTRAINT `fk_curator_exhibition` FOREIGN KEY (`curator_id`) REFERENCES `curator` (`curator_id`) ON DELETE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

CREATE TABLE `gallery` (
    `gallery_id` int NOT NULL AUTO_INCREMENT,
    `name` varchar(100) NOT NULL,
    `address` varchar(255) NOT NULL,
    PRIMARY KEY (`gallery_id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

CREATE TABLE `exhibition_artwork` (
    `exhibition_id` int NOT NULL,
    `artwork_id` int NOT NULL,
    PRIMARY KEY (`exhibition_id`, `artwork_id`),
    CONSTRAINT `fk_artwork_exhibition_artwork` FOREIGN KEY (`artwork_id`) REFERENCES `artwork` (`artwork_id`) ON DELETE CASCADE,
    CONSTRAINT `fk_exhibition_exhibition_artwork` FOREIGN KEY (`exhibition_id`) REFERENCES `exhibition` (`exhibition_id`) ON DELETE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

CREATE TABLE `gallery_exhibition` (
    `gallery_id` int NOT NULL,
    `exhibition_id` int NOT NULL,
    PRIMARY KEY (`gallery_id`, `exhibition_id`),
    CONSTRAINT `fk_exhibition_gallery_exhibition` FOREIGN KEY (`exhibition_id`) REFERENCES `exhibition` (`exhibition_id`) ON DELETE CASCADE,
    CONSTRAINT `fk_gallery_gallery_exhibition` FOREIGN KEY (`gallery_id`) REFERENCES `gallery` (`gallery_id`) ON DELETE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;