CREATE DATABASE medialogue;
GRANT USAGE ON *.* TO 'appuser'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON medialogue.* TO 'appuser'@'localhost';
FLUSH PRIVILEGES;

USE medialogue;

CREATE TABLE IF NOT EXISTS 'users' (
    'id' int(16) NOT NULL AUTO_INCREMENT,
    'username' varchar(40) NOT NULL,
    'email' varchar(255) NOT NULL,
    'password' varchar(255) NOT NULL,
    PRIMARY KEY ('id')
) 

CREATE TABLE IF NOT EXISTS 'books' (
    'id' int(16) NOT NULL AUTO_INCREMENT,
    'title' varchar(255) NOT NULL,
    'authour' varchar(255),
    'category' varchar(255),
    'description' longtext,
    
)

