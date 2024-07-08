-- Active: 1719746560269@@127.0.0.1@3306@news_db
CREATE TABLE `article` (
    `article_id` int NOT NULL AUTO_INCREMENT,
    `title` varchar(100) NOT NULL,
    `content` text NOT NULL,
    PRIMARY KEY (`article_id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

CREATE TABLE `author` (
    `author_id` int NOT NULL AUTO_INCREMENT,
    `name` varchar(100) NOT NULL,
    PRIMARY KEY (`author_id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

CREATE TABLE `tag` (
    `tag_id` int NOT NULL AUTO_INCREMENT,
    `name` varchar(100) NOT NULL,
    PRIMARY KEY (`tag_id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

CREATE TABLE `article_author` (
    `article_id` int NOT NULL,
    `author_id` int NOT NULL,
    PRIMARY KEY (`article_id`, `author_id`),
    CONSTRAINT `article_id` FOREIGN KEY (`article_id`) REFERENCES `article` (`article_id`),
    CONSTRAINT `author_id` FOREIGN KEY (`author_id`) REFERENCES `author` (`author_id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

CREATE TABLE `article_tag` (
    `article_id` int NOT NULL,
    `tag_id` int NOT NULL,
    PRIMARY KEY (`article_id`, `tag_id`),
    CONSTRAINT `fk_article_article_tag` FOREIGN KEY (`article_id`) REFERENCES `article` (`article_id`),
    CONSTRAINT `fk_tag_article_tag` FOREIGN KEY (`tag_id`) REFERENCES `tag` (`tag_id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;