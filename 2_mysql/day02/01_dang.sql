SET NAMES UTF8;
DROP DATABASE IF EXISTS dang;
CREATE DATABASE dang CHARSET=UTF8;
USE dang;
CREATE TABLE book(
	bid INT,
	title VARCHAR(16),
	author VARCHAR(8),
	price INT,
	publish VARCHAR(16),
	pubTime VARCHAR(16)
);
INSERT INTO book VALUES('1','标题1','作者1','10','出版社1','2019-5-1');
INSERT INTO book VALUES('2','标题2','作者2','11','出版社2','2019-5-2');
INSERT INTO book VALUES('3','标题3','作者3','12','出版社3','2019-5-3');
INSERT INTO book VALUES('4','标题4','作者4','13','出版社4','2019-5-4');
