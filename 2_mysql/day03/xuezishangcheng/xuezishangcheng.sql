SET NAMES UTF8;
DROP DATABASE IF EXISTS xz;
CREATE DATABASE xz CHARSET=UTF8;
USE xz;
#用户信息表xz_user
CREATE TABLE xz_user(
	uid INT PRIMARY KEY AUTO_INCREMENT,#用户的ID，为用户的唯一标识，由系统自动生成
	uname VARCHAR(32),
	upwd VARCHAR(32),
	email VARCHAR(64),
	phone  VARCHAR(16) UNIQUE NOT NULL,#手机号码
	avatar VARCHAR(128),#头像图片路径
	user_name VARCHAR(32),#用户名，如王小明
	gender INT#性别 0-女 1-男
);
#用户地址表xz_receiver_address
CREATE TABLE xz_receiver_address(
	aid INT PRIMARY KEY AUTO_INCREMENT,
	user_id INT,#用户编号
	receiver VARCHAR(16),#接收人姓名
	province VARCHAR(16),#省
	city VARCHAR(16),#市
	county VARCHAR(16),#县
	address VARCHAR(128),#详细地址
	cellphone VARCHAR(16),#手机
	fixedphone VARCHAR(16),#固定电话
	postcode VARCHAR(6),#邮编
	tag VARCHAR(16),#标签名
	is_default BOOLEAN#是否为当前用户的默认收货地址
);
#用户购物车表xz_shopping_cart
CREATE TABLE xz_shopping_cart(
	cid INT PRIMARY KEY AUTO_INCREMENT,
	user_id INT,#用户编号
	product_id INT,#商品编号
	count INT #购买数量
);
#用户订单表xz_order
CREATE TABLE xz_order(
	aid INT PRIMARY KEY AUTO_INCREMENT,
	user_id INT,#用户编号
	address_id INT,
	status INT,#订单状态 1-等待付款 2-等待发货 3-运输中 4-已签收 5-已取消
	order_time BIGINT,#下单时间
	pay_time BIGINT,#付款时间
	deliver_time BIGINT,#发货时间
	received_time BIGINT#签收时间
);
#用户订单详情表xz_order_detail
CREATE TABLE xz_order_detail(
	did INT PRIMARY KEY AUTO_INCREMENT,
	order_id INT,#订单编号
	product_id INT,#产品编号
	count INT#购买数量
);
#商品类别表xz_laptop_family
CREATE TABLE xz_laptop_family(
	fid INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(32)#类别名称
);
#商品表xz_laptop
CREATE TABLE xz_laptop(
	lid INT PRIMARY KEY AUTO_INCREMENT,
	family_id INT,#所属型号家族编号
	product_id INT,#产品编号
	title VARCHAR(128),#主标题
	subtitle VARCHAR(128),#副标题
	price DECIMAL(10,2),#价格
	promise VARCHAR(64),#服务承诺
	spec VARCHAR(64),#规格/颜色
	name VARCHAR(32),#商品名称
	os VARCHAR(32),#操作系统
	memory VARCHAR(32),#内存容量
	resolution VARCHAR(32),#分辨率
	video_card VARCHAR(32),#显卡型号
	cpu VARCHAR(32),#处理器
	video_memory VARCHAR(32),#显存容量
	category VARCHAR(32),#所属分类
	disk VARCHAR(32),#硬盘容量及类型
	details VARCHAR(1024),#产品详细说明
	shelf_time BIGINT,#上架时间
	sold_count INT,#已售出的数量
	is_onsale BOOLEAN#是否促销中
);
#商品详情图表
CREATE TABLE xz_laptop_pic(
	pid INT PRIMARY KEY AUTO_INCREMENT,
	laptop_id INT,#笔记本电脑编号
	sm VARCHAR(128),#小图片路径
	md VARCHAR(128),#中图片路径
	lg VARCHAR(128)#大图片路径
);
#首页轮播图片
CREATE TABLE xz_index_carousel(
	cid INT PRIMARY KEY AUTO_INCREMENT,
	img VARCHAR(128),#图片路径
	title VARCHAR(64),#图片描述
	href VARCHAR(128)#图片链接
);
#首页商品栏目表
CREATE TABLE xz_index_product(
	pid INT PRIMARY KEY AUTO_INCREMENT,
	title VARCHAR(64),
	details VARCHAR(128),
	pic VARCHAR(128),
	price DECIMAL(10,2),
	href VARCHAR(128),
	seq_recommenden TINYINT,
	seq_new_arrival TINYINT,
	seq_top_sale TINYINT
);