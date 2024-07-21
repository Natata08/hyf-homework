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

-- Users
INSERT INTO
    `user` (`name`, `email`, `password`)
VALUES (
        'Alice Johnson',
        'alice@example.com',
        'password123'
    ),
    (
        'Bob Smith',
        'bob@example.com',
        'securepassword456'
    ),
    (
        'Charlie Brown',
        'charlie@example.com',
        'charliepass789'
    ),
    (
        'Diana Prince',
        'diana@example.com',
        'wonderwoman321'
    ),
    (
        'Ethan Hunt',
        'ethan@example.com',
        'missionimpossible654'
    );

-- Posts
INSERT INTO
    `post` (
        `title`,
        `content`,
        `author_id`
    )
VALUES (
        'First Post',
        'This is the content of the first post.',
        1
    ),
    (
        'Second Post',
        'This is the content of the second post.',
        2
    ),
    (
        'Third Post',
        'This is the content of the third post.',
        3
    ),
    (
        'Fourth Post',
        'This is the content of the fourth post.',
        4
    ),
    (
        'Fifth Post',
        'This is the content of the fifth post.',
        5
    );

-- Comments
INSERT INTO
    `comment` (
        `content`,
        `author_id`,
        `post_id`
    )
VALUES (
        'This is the first comment on the first post.',
        1,
        1
    ),
    (
        'This is the second comment on the first post.',
        2,
        1
    ),
    (
        'This is a comment on the second post.',
        3,
        2
    ),
    (
        'This is another comment on the third post.',
        5,
        3
    );

INSERT INTO
    `comment` (
        `content`,
        `author_id`,
        `post_id`,
        `parent_comment_id`
    )
VALUES (
        'This is a reply to the first comment on the first post.',
        4,
        1,
        1
    ),
    (
        'This is a reply to the first comment on the second post.',
        4,
        2,
        3
    );

-- Reactions
INSERT INTO
    `reaction` (
        `reaction_type`,
        `user_id`,
        `post_id`
    )
VALUES ('like', 1, 1),
    ('highfive', 2, 1),
    ('laugh', 3, 1),
    ('cry', 3, 2),
    ('like', 4, 3);

INSERT INTO
    `reaction` (
        `reaction_type`,
        `user_id`,
        `comment_id`
    )
VALUES ('like', 1, 6),
    ('highfive', 3, 5),
    ('laugh', 3, 5),
    ('cry', 2, 1),
    ('highfive', 4, 2),
    ('cry', 4, 6);

-- Checking the edge cases for constraints
-- Error: Duplicate entry '1-1-like' for key 'reaction.uc_user_post_reaction'
INSERT INTO
    `reaction` (
        `reaction_type`,
        `user_id`,
        `post_id`
    )
VALUES ('like', 1, 1);

-- Error: Check constraint 'chk_reaction' is violated.
INSERT INTO
    `reaction` (
        `reaction_type`,
        `user_id`,
        `post_id`,
        `comment_id`
    )
VALUES ('cry', 2, 3, 1);

-- Friendships
INSERT INTO `friendship` VALUES (1, 2), (1, 3), (2, 4), (3, 5);

-- Checking the edge cases for constraints
-- Error: Duplicate entry '1-2' for key 'friendship.PRIMARY'
INSERT INTO `friendship` VALUES (1, 2);

--Error: Check constraint 'chk_friendship' is violated.
INSERT INTO `friendship` VALUES (4, 3);

-- Messages
INSERT INTO
    `message` (
        `sender_id`,
        `receiver_id`,
        `content`
    )
VALUES (
        1,
        2,
        'Hello, Tom! How are you?'
    ),
    (
        2,
        1,
        'Hi, Jerry! I am fine, thank you!'
    ),
    (
        3,
        4,
        'Hey Maria, are you coming to the party?'
    ),
    (
        4,
        3,
        'Yes, sure! I will be there.'
    ),
    (
        5,
        1,
        'Hello, long time no see!'
    );