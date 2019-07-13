SET NAMES UTF8;
DROP DATABASE IF EXISTS xz;
CREATE DATABASE xz CHARSET=UTF8;
USE xz;
CREATE TABLE user(
	uid INT,
	uname VARCHAR(9),
	upwd VARCHAR(16),
	email VARCHAR(32),
	phone VARCHAR(11),
	sex VARCHAR(1),
	userName VARCHAR(4),
	regTime VARCHAR(10),
	isOnline INT(1)
);
INSERT INTO user VALUES('1','tom','11','aa@11','12312345670','f','aa','2019/4/2','0');
INSERT INTO user VALUES('2','ab','12','ab@12','12312345671','f','ab','2019/4/3','0');
INSERT INTO user VALUES('3','ac','13','ac@13','12312345672','f','ac','2019/4/4','0');
INSERT INTO user VALUES('4','ad','14','ad@14','12312345673','m','ad','2019/4/5','0');
INSERT INTO user VALUES('5','ae','15','ae@15','12312345674','m','ae','2019/4/6','0');
DELETE FROM user WHERE uid='5';
UPDATE user SET uname='af',sex='f' WHERE uid='4';