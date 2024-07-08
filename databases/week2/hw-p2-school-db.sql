CREATE DATABASE school_db DEFAULT CHARACTER SET = 'utf8mb4';

CREATE TABLE class (
    class_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    begins DATE NOT NULL,
    ends DATE NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

CREATE TABLE student (
    student_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone VARCHAR(100),
    class_id INT NOT NULL,
    CONSTRAINT fk_class FOREIGN KEY (class_id) REFERENCES class (class_id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

-- Create an index on the name column of the student table
CREATE INDEX idx_student_name ON student (name);

-- Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished
ALTER TABLE class
ADD status ENUM(
    'not-started',
    'ongoing',
    'finished'
);