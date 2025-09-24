CREATE DATABASE IF NOT EXISTS `desafio-fullcycle`;
USE `desafio-fullcycle`;

CREATE TABLE IF NOT EXISTS people (
  ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  NAME VARCHAR(255) NOT NULL
);

INSERT INTO people(NAME) VALUES ('Gabriel'), ('Alves'), ('Quiroga');
