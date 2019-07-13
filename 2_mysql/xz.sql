SET NAMES UTF8;
DROP DATABASE IF EXISTS xz2;
CREATE DATABASE xz2 CHARSET=UTF8;
USE xz2;
#创建家族分类表
CREATE TABLE laptop_family(
	fid INT PRIMARY KEY,
	fname VARCHAR(8) UNIQUE,
	laptopCount INT DEFAULT 12
);
INSERT INTO laptop_family VALUES(10,'联想',2);
INSERT INTO laptop_family VALUES(20,'戴尔',2);
INSERT INTO laptop_family VALUES(30,'小米',3);
INSERT INTO laptop_family VALUES(40,'苹果',3);
INSERT INTO laptop_family VALUES(50,'华硕',DEFAULT);
INSERT INTO laptop_family(fid,fname) VALUES(60,'神州');
#创建笔记本数据表
CREATE TABLE laptop(
	lid INT PRIMARY KEY AUTO_INCREMENT,
	title VARCHAR(32) UNIQUE,
	price DECIMAL(7,2) DEFAULT 6999,
	spec VARCHAR(32) UNIQUE,
	detail VARCHAR(3000),
	shelfTime DATE,
	isOnsale TINYINT,
	familyId INT,
	FOREIGN KEY(familyId) REFERENCES laptop_family(fid)
);
INSERT INTO laptop VALUES(1,'联想燃7000','7000','规格1','详情1','2019-05-18',1,10);
INSERT INTO laptop VALUES(2,'戴尔燃7000','8000','规格2','详情2','2019-05-19',1,20);
INSERT INTO laptop VALUES(3,'小米燃7000','9000','规格3','详情3','2019-05-20',1,30);
INSERT INTO laptop VALUES(4,'小米燃8000','6000','规格4','详情4','2019-05-21',1,30);
INSERT INTO laptop VALUES(5,'小米燃8001','6000','规格5','详情5','2019-05-21',1,NULL);
INSERT INTO laptop VALUES(6,NULL,'6000','规格6','详情6','2019-05-21',1,30);
INSERT INTO laptop VALUES(NULL,NULL,'7000','规格7','详情7','2019-05-21',1,30);
INSERT INTO laptop VALUES(NULL,NULL,DEFAULT,'规格8','详情8','2019-05-21',1,30);
INSERT INTO laptop VALUES(NULL,NULL,DEFAULT,'规格9','详情9','2019-05-21',1,30);
INSERT INTO laptop(lid,title,spec,detail,shelfTime,isOnsale,familyId) VALUES(NULL,'小米燃8002','规格10','详情10','2019-05-21',1,30);
INSERT INTO laptop(title,spec,detail,shelfTime,isOnsale,familyId) VALUES('小米燃8003','规格12','详情11','2019-05-21',1,30);


