DROP TABLE parcels
CREATE TABLE parcels
(
    id  VARCHAR(164) PRIMARY KEY, 
    description VARCHAR(164),
	sender_number VARCHAR(100),
	receiver_number VARCHAR(100),
	start_location VARCHAR(100),
	end_location VARCHAR(100),
	isDeleted BIT DEFAULT 0 ,
	isUpdated BIT DEFAULT 0 ,
	isSent BIT DEFAULT 0 ,
	isDelivered BIT DEFAULT 0 ,
	current_location VARCHAR(100),
	sender_id VARCHAR(164)  FOREIGN KEY REFERENCES users(id)

);