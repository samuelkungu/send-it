USE [Parcel-Delivery]
GO
/****** Object:  StoredProcedure [dbo].[getAParcel]    Script Date: 3/9/2022 10:14:22 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

ALTER PROCEDURE [dbo].[getAParcel]
	(@id    VARCHAR(164) )
AS
BEGIN
    SELECT 
        *
    FROM 
        parcels
    WHERE id  = @id AND isDeleted = 0 

END;

