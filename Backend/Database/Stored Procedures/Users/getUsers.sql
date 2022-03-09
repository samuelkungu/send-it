USE [Parcel-Delivery]
GO
/****** Object:  StoredProcedure [dbo].[getUsers]    Script Date: 3/9/2022 10:14:51 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

ALTER PROCEDURE [dbo].[getUsers]
AS
BEGIN
    SELECT 
        *
    FROM 
        users
		WHERE isDeleted = 0 
    ORDER BY 
      id;
END;

