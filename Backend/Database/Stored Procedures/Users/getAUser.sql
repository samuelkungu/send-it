USE [Parcel-Delivery]
GO
/****** Object:  StoredProcedure [dbo].[getAUser]    Script Date: 3/9/2022 10:14:32 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

ALTER PROCEDURE [dbo].[getAUser]
	(@id    VARCHAR(164) )
AS
BEGIN
    SELECT 
        *
    FROM 
        users
    WHERE id  = @id AND isDeleted = 0 

END;

