#db.sql
#创建表 xz
#id  行标识
#m   月份
#sal 销售额

USE xz;
CREATE TABLE t_sal(
  id INT PRIMARY KEY AUTO_INCREMENT,
  m  INT,
  sal INT
);
INSERT INTO t_sal VALUES(null,1,100);
INSERT INTO t_sal VALUES(null,2,110);
INSERT INTO t_sal VALUES(null,3,190);
INSERT INTO t_sal VALUES(null,4,200);
INSERT INTO t_sal VALUES(null,5,300);
INSERT INTO t_sal VALUES(null,6,400);
INSERT INTO t_sal VALUES(null,7,500);
INSERT INTO t_sal VALUES(null,8,300);
INSERT INTO t_sal VALUES(null,9,200);
INSERT INTO t_sal VALUES(null,10,1000);
INSERT INTO t_sal VALUES(null,11,200);
INSERT INTO t_sal VALUES(null,12,100);


