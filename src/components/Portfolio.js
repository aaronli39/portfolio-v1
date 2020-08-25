import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
	Box,
	Grid,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Button,
	Typography,
	ThemeProvider,
} from "@material-ui/core";
import Navbar from "./Navbar";
import project1 from "../components/images/html_css_flask.png";
import project2 from "../components/images/react_material.png";
import project3 from "../components/images/html_css_bootstrap.png";
import spotm8 from "../components/images/mern.jpeg";

const useStyles = makeStyles(theme => ({
	mainContainer: {
		background: "#233",
		height: "100%",
	},
	cardContainer: {
		maxWidth: 345,
		margin: "2rem auto",
	},
	inProgress: {
		background: theme.palette.primary.light,
		color: "lightgray",
		"&:hover": {
			background: "white",
			color: theme.palette.primary.main
		}
	}
}));

const Portfolio = () => {
	const classes = useStyles();

	return (
		<Box component="div" className={classes.mainContainer}>
			<Navbar />
			<Grid container justify="center">

				{/* Project 1 */}
				<Grid item xs={12} sm={8} md={6}>
					<Card className={classes.cardContainer}>
						<CardActionArea>
							<CardMedia
								component="img"
								alt="Project 1"
								height="140"
								image={project1}
							/>
							<CardContent>
								<Typography gutterBottom variant="h5">
									Classify
                </Typography>
								<Typography variant="body2" color="textSecondary" component="p">
									Classify is an educational platform meant to make classes, students, assignments, and grades easier
									to manage. Students have a platform similar to Google Classroom, except they can see their grades and upcoming
									assignments or tests as well. Teachers can make class posts, assign homework and due dates, as well as grade their students
									all on the same platform. On top of that, users can create admin accounts that serve as administrators of a school,
									being able to do things like creating unique classes, add student rosters from a CSV, and doing everything else
									a student and teacher can do. Together, these three levels of users: school admins, teachers, and students are served
									by a central platform for the best educational experience.
                </Typography>
							</CardContent>
						</CardActionArea>
						<CardActions>
							<Button size="small" color="primary" href="https://github.com/aaronli39/managing_manatees.git" target="_blank">
								Source
              </Button>
							<Button size="small" color="primary" href="https://ftf-final-project-goldman.herokuapp.com/" target="_blank">
								Live Demo
              </Button>
						</CardActions>
					</Card>
				</Grid>

				{/* Spotm8 */}
				<Grid item xs={12} sm={8} md={6}>
					<Card className={classes.cardContainer} >
						<CardActionArea>
							<CardMedia
								component="img"
								alt="Spotm8 Project"
								height="140"
								image={spotm8}
							/>
							<CardContent>
								<Typography gutterBottom variant="h5">
									Spotm8
                </Typography>
								<Typography variant="body2" color="textSecondary" component="p">
									Spotim8 (Spotmate) is a platform that aims to connect users based on music preferences. Powered by the Spotify API, Spotm8 allows
									users to see all their personal Spotify data: top tracks, favorite artists, song recommendations, and more. Users can find other 
									users nearby and filter through them based on music preferences, and eventually match. When two users match, they can chat, and share 
									their Spotify profile music data with each other. This application was inspired by Tinder, and I made this application to teach
									myself the MERN stack. 
                </Typography>
							</CardContent>
						</CardActionArea>
						<CardActions>
							<Button size="small" color="primary" href="https://github.com/aaronli39/spotm8.git" target="_blank">
								Source
              </Button>
							<Button size="small" color="primary" className={classes.inProgress} onClick={(e) => e.preventDefault} href="" target="_blank">
								In Progress
              </Button>
						</CardActions>
					</Card>
				</Grid>

				{/* Project 2 */}
				<Grid item xs={12} sm={8} md={6}>
					<Card className={classes.cardContainer}>
						<CardActionArea>
							<CardMedia
								component="img"
								alt="Project 2"
								height="140"
								image={project2}
							/>
							<CardContent>
								<Typography gutterBottom variant="h5">
									Personal Portfolio V1
                				</Typography>
								<Typography variant="body2" color="textSecondary" component="p">
									Personal portfolio page with resume, contact, and work experience sections.
									Created with React and Material-UI, and several other npm packages.
              				  </Typography>
							</CardContent>
						</CardActionArea>
						<CardActions>
							<Button size="small" color="primary" href="https://github.com/aaronli39/portfolio-v1" target="_blank">
								Source
              				</Button>
							<Button size="small" color="primary" href="aaronli39.herokuapp.com" target="_blank">
								Live Demo
              				</Button>
						</CardActions>
					</Card>
				</Grid>


				{/* Project 3 */}
				<Grid item xs={12} sm={8} md={6}>
					<Card className={classes.cardContainer}>
						<CardActionArea>
							<CardMedia
								component="img"
								alt="Project 1"
								height="140"
								image={project3}
							/>
							<CardContent>
								<Typography gutterBottom variant="h5">
									Campaign Website
                </Typography>
								<Typography variant="body2" color="textSecondary" component="p">
									Using Bootstrap, SCSS, and Javascript, I created a responsive, mobile-first website for a student
									presidential election campaign.
                </Typography>
							</CardContent>
						</CardActionArea>
						<CardActions>
							<Button size="small" color="primary" href="https://github.com/aaronli39/campaign" target="_blank">
								Source
              </Button>
							<Button size="small" color="primary" href="https://aaronli39.github.io/campaign/" target="_blank">
								Live Demo
              </Button>
						</CardActions>
					</Card>
				</Grid>

			</Grid>
		</Box>
	);
};

export default Portfolio;
