DROP DATABASE IF EXISTS dang;
CREATE DATABASE dang;
USE dang;
CREATE TABLE book(
	bid INT,
	title VARCHAR(8),
	price INT
);
INSERT INTO book VALUES('1','ONE','10');
INSERT INTO book VALUES('2','TWO','12');
UPDATE book SET price='13' WHERE bid='2';
DELETE FROM book WHERE bid='1';
SELECT * FROM book;