-- 데이터베이스 생성
CREATE DATABASE IF NOT EXISTS BarBuddy;
USE BarBuddy;

-- User 테이블 생성
CREATE TABLE IF NOT EXISTS `User` (
    `ID` INT NOT NULL AUTO_INCREMENT,
    `password` VARCHAR(255) NULL,
    `email` VARCHAR(255) NULL,
    PRIMARY KEY (`ID`)
);

-- spirits 테이블 생성
CREATE TABLE IF NOT EXISTS `spirits` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `type` VARCHAR(100) DEFAULT NULL,
  `alcohol_degree` DECIMAL(5,2) DEFAULT NULL,
  `price` DECIMAL(10,2) DEFAULT NULL,
  `description` TEXT,
  `image_path` VARCHAR(255) DEFAULT NULL,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);

-- cocktails 테이블 생성
CREATE TABLE IF NOT EXISTS `cocktails` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `base_spirits` JSON NOT NULL,
  `category` VARCHAR(255) DEFAULT NULL,
  `garnish` VARCHAR(255) DEFAULT NULL,
  `glass_type` VARCHAR(255) DEFAULT NULL,
  `instructions` TEXT,
  `description` TEXT,
  `alcohol_degree` FLOAT DEFAULT NULL,
  `image_path` VARCHAR(255) DEFAULT NULL,
  `ingredients` JSON NOT NULL,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
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
    FOREIGN KEY (`userID`) REFERENCES `User` (`ID`) ON DELETE CASCADE,
    FOREIGN KEY (`imageID`) REFERENCES `Image` (`ID`) ON DELETE CASCADE
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
    FOREIGN KEY (`userID`) REFERENCES `User` (`ID`) ON DELETE CASCADE,
    FOREIGN KEY (`boardID`) REFERENCES `Board` (`ID`) ON DELETE CASCADE
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
    FOREIGN KEY (`postID`) REFERENCES `Post` (`ID`) ON DELETE CASCADE,
    FOREIGN KEY (`userID`) REFERENCES `User` (`ID`) ON DELETE CASCADE
);
