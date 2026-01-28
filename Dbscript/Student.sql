USE [CoachingClass]
GO

/****** Object:  Table [dbo].[Student]    Script Date: 28-01-2026 18:23:33 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Student](
	[id] [int] NULL,
	[name] [varchar](20) NOT NULL,
	[DOB] [date] NULL,
	[dept_id] [int] NULL,
	[adress] [varchar](200) NULL,
	[mobNo] [varchar](20) NULL,
	[email] [varchar](20) NULL,
	[class] [varchar](20) NULL,
	[parent_email] [varchar](20) NULL,
	[parent_mob] [varchar](15) NULL,
	[status] [varchar](20) NULL
) ON [PRIMARY]
GO


