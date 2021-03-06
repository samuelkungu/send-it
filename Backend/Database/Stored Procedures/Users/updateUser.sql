USE [Parcel-Delivery]
GO
/****** Object:  StoredProcedure [dbo].[updateUser]    Script Date: 3/9/2022 10:15:07 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER PROCEDURE [dbo].[updateUser]
 @id   VARCHAR(164) ,
@user_name VARCHAR(100),
@full_name VARCHAR(100),
@phone_number VARCHAR(100),
@email VARCHAR(100),
@password VARCHAR(100)

AS 
BEGIN 
    SET NOCOUNT ON 

     BEGIN
	 
    UPDATE users

	SET  
id = @id,
user_name = @user_name,
full_name = @full_name,
phone_number = @phone_number,
email = @email,
password = @password
WHERE  id = @id AND isDeleted = 0 
        END
END 

