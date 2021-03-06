USE [Parcel-Delivery]
GO
/****** Object:  StoredProcedure [dbo].[updateParcel]    Script Date: 3/9/2022 10:15:00 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER PROCEDURE [dbo].[updateParcel]
    @id   VARCHAR(164) ,
    @description VARCHAR(100),
	@sender_number VARCHAR(100),
	@receiver_number VARCHAR(100),
	@start_location VARCHAR(100),
	@end_location VARCHAR(100),
	@current_location VARCHAR(100),
	@sender_id INT
AS 
BEGIN 
    SET NOCOUNT ON 

     BEGIN
	 
    UPDATE parcels

	SET


	id = @id,
    description = @description, 
    sender_number = @sender_number, 
    receiver_number = @receiver_number, 
    start_location = @start_location, 
   end_location = @end_location,
   current_location = @current_location, 
   sender_id = @sender_id

  WHERE  id = @id AND isDeleted = 0 
        END
END 

