USE [Parcel-Delivery]
GO
/****** Object:  StoredProcedure [dbo].[deleteParcel]    Script Date: 3/9/2022 10:14:00 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER PROCEDURE [dbo].[deleteParcel]
	(@id       VARCHAR(164) )
AS
BEGIN
   UPDATE parcels  
   SET isDeleted = 1
    WHERE id  = @id AND isDeleted = 0 
END