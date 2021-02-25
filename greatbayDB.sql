DROP DATABASE IF EXISTS greatbay_db;

CREATE DATABASE greatbay_db;

USE greatbay_db;

CREATE TABLE greatbayItem (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) NOT NULL,
  category VARCHAR(45),
  bid INT NOT NULL,
  PRIMARY KEY (id)
);

SELECT name FROM greatbayItem;

SELECT category FROM greatbayItem;


