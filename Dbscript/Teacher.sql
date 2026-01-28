USE [CoachingClass]
GO

/****** Object:  Table [dbo].[Teacher]    Script Date: 28-01-2026 18:25:43 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Teacher](
	[id] [int] NULL,
	[name] [varchar](20) NOT NULL,
	[DOB] [date] NULL,
	[email] [varchar](20) NULL,
	[mobNo] [varchar](20) NULL,
	[degree] [varchar](30) NULL,
	[subject] [varchar](30) NULL,
	[salary] [decimal](10, 2) NULL,
	[status] [varchar](20) NULL
) ON [PRIMARY]
GO


