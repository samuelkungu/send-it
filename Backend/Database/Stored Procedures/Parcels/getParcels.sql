USE [Parcel-Delivery]
GO
/****** Object:  StoredProcedure [dbo].[getParcels]    Script Date: 3/9/2022 10:14:41 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


ALTER PROCEDURE [dbo].[getParcels]
AS
BEGIN
    SELECT 
        *
    FROM 
        parcels
		WHERE isDeleted = 0 
    ORDER BY 
       id;
END;