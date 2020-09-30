import React from "react";
import Navbar from "./Navbar";
import { Box, Typography, makeStyles, Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	mainContainer: {
		background: "#233",
	},
	timeLine: {
		position: "relative",
		padding: "1rem",
		margin: "0 auto",
		"&:before": {
			content: "''",
			position: "absolute",
			height: "100%",
			border: "1px solid tan",
			right: "40px",
			top: 0,
		},
		// "&:after": {
		//     content: "''",
		//     display: "table",
		//     clear: "both"
		// },
		[theme.breakpoints.up("md")]: {
			padding: "2rem",
			"&:before": {
				left: "calc(50% - 1px)",
				right: "auto",
			},
		},
	},
	timeLineItem: {
		[theme.breakpoints.up("md")]: {
			width: "44%",
			margin: "1rem",
			"&:nth-of-type(2n)": {
				float: "right",
				margin: "1rem",
				borderColor: "tan",
			},
			"&:nth-of-type(2n):before": {
				right: "auto",
				left: "-0.625rem",
				borderColor: "transparent transparent tomato tomato",
			},
		},
		padding: "1rem",
		borderBottom: "2px solid tan",
		position: "relative",
		margin: "1rem 3rem 1rem 1rem",
		clear: "both",
		"&:after": {
			content: "''",
			position: "absolute",
		},
		"&:before:": {
			content: "''",
			position: "absolute",
			right: "-0.625rem",
			top: "calc(50% - 5px)",
			borderStyle: "solid",
			borderColor: "tomato tomato transparent transparent",
			borderWidth: "0.625rem",
			transform: "rotate(45deg)",
		},
	},
	timeLineYear: {
		textAlign: "center",
		maxWidth: "9.375rem",
		margin: "0 3rem 0 auto",
		fontSize: "1.8rem",
		background: "tomato",
		color: "white",
		lineHeight: 1,
		padding: "0.5rem 0 1rem",
		"&:before": {
			display: "none",
		},
		[theme.breakpoints.up("md")]: {
			margin: "0 auto",
			"&:nth-of-type(2n)": {
				float: "none",
				margin: "0 auto",
			},
			"&:nth-of-type(2n):before": {
				display: "none",
			},
		},
	},
	heading: {
		color: "tomato",
		padding: "3rem 0",
		textTransform: "uppercase",
	},
	month: {
		textAlign: "center",
		maxWidth: "8.5rem",
		margin: "1.5rem 3rem 0 auto !important",
		fontSize: "1.2rem",
		background: "tomato",
		color: "white",
		lineHeight: 0.8,
		padding: "0.5rem 0 0.5rem",
		"&:before": {
			display: "none",
		},
		[theme.breakpoints.up("md")]: {
			margin: "1.5rem auto 0.5rem auto !important",
			"&:nth-of-type(2n)": {
				float: "none",
				margin: "0 auto",
			},
			"&:nth-of-type(2n):before": {
				display: "none",
			},
		},
	},
	subHeading: {
		color: "white",
		padding: "0",
		textTransform: "uppercase",
	},
}));

const Resume = () => {
	const classes = useStyles();

	return (
		<React.Fragment>
			<Navbar />

			<Box component="header" className={classes.mainContainer}>
				{/* 2020 stuff */}
				<Typography variant="h4" className={classes.heading} align="center">
					Working Experience
				</Typography>

				{/* 2020 jobs */}
				<Box component="div" className={classes.timeLine}>
					<Typography
						variant="h2"
						className={`${classes.timeLineYear} ${classes.timeLineItem}`}
					>
						2020
					</Typography>

					{/* hack 4 impact */}
					<Typography
						variant="h2"
						className={`${classes.month} ${classes.timeLineItem}`}
					>
						Sept
					</Typography>
					<Box component="div" className={classes.timeLineItem}>
						<Typography variant="h5" className={classes.subHeading}>
							Software Engineer
						</Typography>
						<Typography variant="body1" style={{ color: "tomato" }}>
							Hack4Impact{" "}
							<Typography
								variant="span"
								style={{
									color: "tomato",
									fontSize: "12px",
									fontStyle: "italic",
								}}
							>
								(Current job)
							</Typography>
						</Typography>
						<Typography
							variant="subtitle1"
							style={{ color: "tan", marginBottom: "3px" }}
						>
							● Participating at a local chapter of Hack4Impact that aims to
							develop apps for nonprofits
						</Typography>
						<Typography
							variant="subtitle1"
							style={{ color: "tan", marginBottom: "3px" }}
						>
							● Collaborating on small teams to write deployable code for web
							and mobile applications
						</Typography>
						<Typography
							variant="subtitle1"
							style={{ color: "tan", marginBottom: "3px" }}
						>
							● Utilize appropriate technologies and design a fully functional
							app from a prototype
						</Typography>
					</Box>

					{/* teaching assistant job upperline */}
					<Typography
						variant="h2"
						className={`${classes.month} ${classes.timeLineItem}`}
					>
						July
					</Typography>
					<Box component="div" className={classes.timeLineItem}>
						<Typography variant="h5" className={classes.subHeading}>
							Teacher Assistant
						</Typography>
						<Typography variant="body1" style={{ color: "tomato" }}>
							Upperline Code{" "}
							<Typography
								variant="span"
								style={{
									color: "tomato",
									fontSize: "12px",
									fontStyle: "italic",
								}}
							>
								(2 months)
							</Typography>
						</Typography>
						<Typography
							variant="subtitle1"
							style={{ color: "tan", marginBottom: "3px" }}
						>
							● Co-instructed one cohort of 16 high school seniors out of five
							total cohorts in a full-stack web development course with Python,
							Flask, HTML, CSS, and Bootstrap
						</Typography>
						<Typography
							variant="subtitle1"
							style={{ color: "tan", marginBottom: "3px" }}
						>
							● Assisted students in debugging their code while teaching them
							best practices and advice for how to build certain projects
						</Typography>
						<Typography
							variant="subtitle1"
							style={{ color: "tan", marginBottom: "3px" }}
						>
							● Managed class logistics to ensure a smooth class experience, and
							to make sure students are comfortable and learning
						</Typography>
					</Box>

					{/* end of 2020 stuff */}

					{/* 2019 stuff  */}
					<Typography
						variant="h2"
						className={`${classes.timeLineYear} ${classes.timeLineItem}`}
					>
						2019
					</Typography>

					{/* 2019 jobs */}
					<Typography
						variant="h2"
						className={`${classes.month} ${classes.timeLineItem}`}
					>
						September
					</Typography>
					<Box component="div" className={classes.timeLineItem}>
						<Typography variant="h5" className={classes.subHeading}>
							IT Assistant
						</Typography>
						<Typography variant="body1" style={{ color: "tomato" }}>
							Boston University{" "}
							<Typography
								variant="span"
								style={{
									color: "tomato",
									fontSize: "12px",
									fontStyle: "italic",
								}}
							>
								(3 months)
							</Typography>
						</Typography>
						<Typography
							variant="subtitle1"
							style={{ color: "tan", marginBottom: "3px" }}
						>
							● Provided technical troubleshooting and assistance over the phone
							for Boston University students, faculty, and affliates
						</Typography>
						<Typography
							variant="subtitle1"
							style={{ color: "tan", marginBottom: "3px" }}
						>
							● Assisted in data retrieval and troubleshooting of hardware and
							software issues for computing devices
						</Typography>
						<Typography
							variant="subtitle1"
							style={{ color: "tan", marginBottom: "3px" }}
						>
							● Organized and logged important details for each service request
							using a ticketing system
						</Typography>
					</Box>

					<Typography
						variant="h2"
						className={`${classes.month} ${classes.timeLineItem}`}
					>
						July
					</Typography>
					<Box component="div" className={classes.timeLineItem}>
						<Typography variant="h5" className={classes.subHeading}>
							Student Fellow
						</Typography>
						<Typography variant="body1" style={{ color: "tomato" }}>
							Upperline Code{" "}
							<Typography
								variant="span"
								style={{
									color: "tomato",
									fontSize: "12px",
									fontStyle: "italic",
								}}
							>
								(2 months)
							</Typography>
						</Typography>
						<Typography
							variant="subtitle1"
							style={{ color: "tan", marginBottom: "3px" }}
						>
							● Participant in a pilot class program that is sponsored and
							hosted by a consortium of top-tier financial institutions (Bank of
							America, Goldman Sachs, JPMorgan Chase, Morgan Stanley, and Wells
							Fargo) to gain a foundational understanding of computer science
						</Typography>
						<Typography
							variant="subtitle1"
							style={{ color: "tan", marginBottom: "3px" }}
						>
							● Learned full stack development with HTML, CSS, Javascript, and
							Python (Flask)
						</Typography>
						<Typography
							variant="subtitle1"
							style={{ color: "tan", marginBottom: "3px" }}
						>
							● Created a student management system (Wisdom) using the above
							technologies and deployed it to Heroku. Users can login, create
							and manage schools data, and managing student data
						</Typography>
					</Box>
					{/* end of 2019 stuff */}
				</Box>
			</Box>
		</React.Fragment>
	);
};

export default Resume;
