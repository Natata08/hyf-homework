-- Active: 1719746560269@@127.0.0.1@3306@hyf_social_media
CREATE DATABASE hyf_social_media;

CREATE TABLE `user` (
    `user_id` int NOT NULL AUTO_INCREMENT,
    `name` varchar(100) NOT NULL,
    `email` varchar(100) UNIQUE NOT NULL,
    `password` varchar(100) NOT NULL,
    `registration_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`user_id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

CREATE TABLE `post` (
    `post_id` int NOT NULL AUTO_INCREMENT,
    `title` varchar(100) NOT NULL,
    `content` text NOT NULL,
    `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP DEFAULT NULL,
    `author_id` int NOT NULL,
    PRIMARY KEY (`post_id`),
    CONSTRAINT `fk_author_post` FOREIGN KEY (`author_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

CREATE TABLE `comment` (
    `comment_id` int NOT NULL AUTO_INCREMENT,
    `content` text NOT NULL,
    `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP DEFAULT NULL,
    `author_id` int NOT NULL,
    `post_id` int NOT NULL,
    `parent_comment_id` int DEFAULT NULL,
    PRIMARY KEY (`comment_id`),
    CONSTRAINT `fk_author_comment` FOREIGN KEY (`author_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE,
    CONSTRAINT `fr_post_comment` FOREIGN KEY (`post_id`) REFERENCES `post` (`post_id`) ON DELETE CASCADE,
    CONSTRAINT `fk_parent_comment` FOREIGN KEY (`parent_comment_id`) REFERENCES `comment` (`comment_id`) ON DELETE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

CREATE TABLE `reaction` (
    `reaction_id` int NOT NULL AUTO_INCREMENT,
    `reaction_type` enum(
        'like',
        'highfive',
        'laugh',
        'cry'
    ) NOT NULL,
    `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `user_id` int NOT NULL,
    `post_id` int DEFAULT NULL,
    `comment_id` int DEFAULT NULL,
    PRIMARY KEY (`reaction_id`),
    CONSTRAINT `fk_comment_reaction` FOREIGN KEY (`comment_id`) REFERENCES `comment` (`comment_id`) ON DELETE CASCADE,
    CONSTRAINT `fk_post_reaction` FOREIGN KEY (`post_id`) REFERENCES `post` (`post_id`) ON DELETE CASCADE,
    CONSTRAINT `fk_user_reaction` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE,
    CONSTRAINT `uc_user_post_reaction` UNIQUE (
        `user_id`,
        `post_id`,
        `reaction_type`
    ),
    CONSTRAINT `uc_user_comment_reaction` UNIQUE (
        `user_id`,
        `comment_id`,
        `reaction_type`
    ),
    CONSTRAINT `chk_reaction` CHECK (
        (
            `post_id` IS NOT NULL
            AND `comment_id` IS NULL
        )
        OR (
            `post_id` IS NULL
            AND `comment_id` IS NOT NULL
        )
    )
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

CREATE TABLE `friendship` (
    `user_id_1` int NOT NULL,
    `user_id_2` int NOT NULL,
    PRIMARY KEY (`user_id_1`, `user_id_2`),
    CONSTRAINT `fk_user_1_friendship` FOREIGN KEY (`user_id_1`) REFERENCES `user` (`user_id`) ON DELETE CASCADE,
    CONSTRAINT `fk_user_2_friendship` FOREIGN KEY (`user_id_2`) REFERENCES `user` (`user_id`) ON DELETE CASCADE,
    CONSTRAINT `chk_friendship` CHECK (`user_id_1` < `user_id_2`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

CREATE TABLE `message` (
    `message_id` int NOT NULL AUTO_INCREMENT,
    `sender_id` int NOT NULL,
    `receiver_id` int NOT NULL,
    `content` TEXT NOT NULL,
    `sent_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`message_id`),
    CONSTRAINT `fk_receiver_message` FOREIGN KEY (`receiver_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE,
    CONSTRAINT `fk_sender_message` FOREIGN KEY (`sender_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;