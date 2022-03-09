DROP TABLE users
CREATE TABLE users
(
    id  VARCHAR(164) PRIMARY KEY, 
    user_name VARCHAR(164),
	full_name VARCHAR(100),
	phone_number VARCHAR(100),
	email VARCHAR(100),
	password VARCHAR(100),
	isAdmin BIT DEFAULT 0,
	isDeleted BIT DEFAULT 0,
	isSent BIT DEFAULT 0,

);