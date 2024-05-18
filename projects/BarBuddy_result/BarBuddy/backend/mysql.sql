-- Web_Back 데이터베이스 생성
CREATE DATABASE IF NOT EXISTS BarBuddy;

-- Web_Back 데이터베이스 선택
USE BarBuddy;

-- User 테이블 생성
CREATE TABLE IF NOT EXISTS `User` (
    `ID` INT NOT NULL AUTO_INCREMENT,
    -- `personalID` VARCHAR(255) NULL,
    `password` VARCHAR(255) NULL,
    -- `name` VARCHAR(255) NULL,
    -- `nickname` VARCHAR(255) NULL,
    -- `phone` VARCHAR(20) NULL,
    `email` VARCHAR(255) NULL,
    -- `birthdate` DATE NULL,
    -- `gender` VARCHAR(10) NULL,
    PRIMARY KEY (`ID`)
);
-- spirit
CREATE TABLE spirits (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(255),
    alcohol_degree DECIMAL(5, 2),
    price DECIMAL(8, 2),
    image_path VARCHAR(255)
);

--cocktails
CREATE TABLE cocktails (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    base_spirit VARCHAR(255) NOT NULL,
    category VARCHAR(255),
    garnish VARCHAR(255),
    glass_type VARCHAR(255),
    instructions TEXT,
    image_path VARCHAR(255),
    description TEXT,
    alcohol_degree DECIMAL(5, 2),
    ingredients JSON,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);










-- Image 테이블 생성
CREATE TABLE IF NOT EXISTS `Image` (
    `ID` INT NOT NULL AUTO_INCREMENT,
    `path` VARCHAR(255) NULL,
    `originalFileName` VARCHAR(255) NULL,
    `creationDate` DATETIME NULL,
    PRIMARY KEY (`ID`)
);

-- Profile 테이블 생성
CREATE TABLE IF NOT EXISTS `Profile` (
    `ID` INT NOT NULL AUTO_INCREMENT,
    `userID` INT NOT NULL,
    `imageID` INT NOT NULL,
    PRIMARY KEY (`ID`),
    FOREIGN KEY (`userID`) REFERENCES `User` (`ID`),
    FOREIGN KEY (`imageID`) REFERENCES `Image` (`ID`)
);

-- Board 테이블 생성
CREATE TABLE IF NOT EXISTS `Board` (
    `ID` INT NOT NULL AUTO_INCREMENT,
    `postTitle` VARCHAR(255) NULL,
    `creationDate` DATETIME NULL,
    PRIMARY KEY (`ID`)
);

-- Post 테이블 생성
CREATE TABLE IF NOT EXISTS `Post` (
    `ID` INT NOT NULL AUTO_INCREMENT,
    `postTitle` VARCHAR(255) NULL,
    `views` INT NULL,
    `content` TEXT NULL,
    `creationDate` DATETIME NULL,
    `modificationDate` DATETIME NULL,
    `userID` INT NOT NULL,
    `boardID` INT NOT NULL,
    PRIMARY KEY (`ID`),
    FOREIGN KEY (`userID`) REFERENCES `User` (`ID`),
    FOREIGN KEY (`boardID`) REFERENCES `Board` (`ID`)
);

-- Comment 테이블 생성
CREATE TABLE IF NOT EXISTS `Comment` (
    `ID` INT NOT NULL AUTO_INCREMENT,
    `content` TEXT NULL,
    `creationDate` DATETIME NULL,
    `modificationDate` DATETIME NULL,
    `postID` INT NOT NULL,
    `userID` INT NOT NULL,
    PRIMARY KEY (`ID`),
    FOREIGN KEY (`postID`) REFERENCES `Post` (`ID`),
    FOREIGN KEY (`userID`) REFERENCES `User` (`ID`)
);