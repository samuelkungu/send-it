USE [Parcel-Delivery]
GO
/****** Object:  StoredProcedure [dbo].[createUser]    Script Date: 3/9/2022 10:13:49 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER PROCEDURE [dbo].[createUser]

@id   VARCHAR(164) ,
@user_name VARCHAR(100),
@full_name VARCHAR(100),
@phone_number VARCHAR(100),
@email VARCHAR(100),
@password VARCHAR(100)
 

AS 
BEGIN 
     SET NOCOUNT ON  
    INSERT INTO users
(
    id,  
    user_name, 
	full_name, 
	phone_number,
	email,
	password
)
VALUES 
(
@id,
@user_name,
@full_name,
@phone_number,
@email,
@password
) 

END 

