import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TextField, Typography, Button, Grid, Box } from "@material-ui/core";
import { Link } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import Navbar from "./Navbar";

const useStyles = makeStyles((theme) => ({
	form: {
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		position: "absolute",
	},
	button: {
		marginTop: "1rem",
		color: "tomato",
		borderColor: "tomato",
		"&:hover": {
			color: "#a64a1c",
		},
	},
	github: {
		marginTop: "1rem",
		color: "white",
		borderColor: "black",
		"&:hover": {
			color: "#d1d9e6",
		},
	},
	linkedin: {
		marginTop: "1rem",
		color: "#1a8edb",
		borderColor: "white",
		"&:hover": {
			color: "#186aa1",
		},
	},
}));

const Contacts = () => {
	const classes = useStyles();

	return (
		<Box component="div" style={{ background: "#233", height: "100vh" }}>
			<Navbar />
			<Grid container justify="center">
				<Box component="form" className={classes.form}>
					<Typography
						variant="h5"
						style={{
							color: "tomato",
							textAlign: "center",
						}}
					>
						SAY HELLO!
					</Typography>
					<Button
						className={classes.github}
						variant="outlined"
						fullWidth={true}
						endIcon={<SendIcon />}
						href="https://github.com/aaronli39"
					>
						Github
					</Button>

					<br />

					<Button
						className={classes.linkedin}
						variant="outlined"
						fullWidth={true}
						endIcon={<SendIcon />}
						href="https://www.linkedin.com/in/aaronli39/"
					>
						LinkedIn
					</Button>

					<br />

					<Button
						className={classes.button}
						variant="outlined"
						fullWidth={true}
						endIcon={<SendIcon />}
						href="mailto:aaronli39@gmail.com"
					>
						Email me
					</Button>
				</Box>
			</Grid>
		</Box>
	);
};

export default Contacts;
