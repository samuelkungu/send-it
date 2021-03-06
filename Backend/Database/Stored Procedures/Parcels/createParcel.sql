GO
/****** Object:  StoredProcedure [dbo].[createParcel]    Script Date: 3/9/2022 10:13:06 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER PROCEDURE [dbo].[createParcel]
    @id    VARCHAR(164), 
    @description VARCHAR(100),
	@sender_number VARCHAR(100),
	@receiver_number VARCHAR(100),
	@start_location VARCHAR(100),
	@end_location VARCHAR(100),
	@current_location VARCHAR(100),
	@sender_id VARCHAR(164)
AS 
BEGIN 
     SET NOCOUNT ON  
    INSERT INTO parcels
(
	id,
   description, 
   sender_number, 
   receiver_number, 
   start_location, 
   end_location, 
   current_location, 
   sender_id
   )
VALUES 
(
	@id,
   @description, 
   @sender_number, 
   @receiver_number, 
   @start_location, 
   @end_location,
   @current_location, 
   @sender_id
   )

END 

