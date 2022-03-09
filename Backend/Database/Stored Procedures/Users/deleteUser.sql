USE [Parcel-Delivery]
GO
/****** Object:  StoredProcedure [dbo].[deleteUser]    Script Date: 3/9/2022 10:14:09 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER PROCEDURE [dbo].[deleteUser]
	(@id     VARCHAR(164) )
AS
BEGIN
    UPDATE users
	SET isDeleted = 1
    WHERE id  = @id AND isDeleted = 0 
END