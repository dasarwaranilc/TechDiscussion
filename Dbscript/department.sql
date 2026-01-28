USE [CoachingClass]
GO

/****** Object:  Table [dbo].[department]    Script Date: 28-01-2026 17:53:20 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[department](
	[id] [int] NULL,
	[name] [varchar](50) NOT NULL,
	[status] [varchar](20) NULL
) ON [PRIMARY]
GO


