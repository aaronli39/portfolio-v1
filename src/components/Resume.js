import React from 'react'
import Navbar from './Navbar'
import { Box, Typography, makeStyles, Divider } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    mainContainer: {
        background: "#233"
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
                right: "auto"
            }
        }
    },
    timeLineItem: {
        [theme.breakpoints.up("md")]: {
            width: "44%",
            margin: "1rem",
            "&:nth-of-type(2n)": {
                float: "right",
                margin: "1rem",
                borderColor: "tan"
            },
            "&:nth-of-type(2n):before": {
                right: "auto",
                left: "-0.625rem",
                borderColor: "transparent transparent tomato tomato"
            }
        },
        pading: "1rem",
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
            transform: "rotate(45deg)"
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
            display: "none"
        },
        [theme.breakpoints.up("md")]: {
            margin: "0 auto",
            "&:nth-of-type(2n)": {
                float: "none",
                margin: "0 auto",
            },
            "&:nth-of-type(2n):before": {
                display: "none"
            }
        }
    },
    heading: {
        color: "tomato",
        padding: "3rem 0",
        textTransform: "uppercase"
    },
    subHeading: {
        color: "white",
        padding: "0",
        textTransform: "uppercase"
    }
}))

const Resume = () => {
    const classes = useStyles()

    return (
        <React.Fragment>

            <Navbar />

            <Box component="header" className={classes.mainContainer}>
                <Typography variant="h4" className={classes.heading} align="center">
                    Working Experience
                </Typography>

                <Box component="div" className={classes.timeLine}>
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2020
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" className={classes.subHeading}>
                            Teacher Assistant
                    </Typography>
                        <Typography variant="body1" style={{ color: "tomato" }}>
                            Upperline Code
                    </Typography>
                        <Typography variant="subtitle1" style={{ color: "tan" }}>
                            Co-instructed a cohort of 16 high school seniors on a full stack curriculum with
                            HTML/CSS/Javascript/Python (Flask)/MongoDB while managing program and class logistics
                    </Typography>
                    </Box>

                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2019
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" className={classes.subHeading}>
                            IT Assistant
                    </Typography>
                        <Typography variant="body1" style={{ color: "tomato" }}>
                            Boston University
                    </Typography>
                        <Typography variant="subtitle1" style={{ color: "tan" }}>
                            Provided hardware and software support for BU students, faculty, and affiliates
                    </Typography>
                    </Box>

                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2019
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" className={classes.subHeading}>
                            Student Fellow at J.P. Morgan Chase
                    </Typography>
                        <Typography variant="body1" style={{ color: "tomato" }}>
                            Upperline Code
                    </Typography>
                        <Typography variant="subtitle1" style={{ color: "tan", marginBottom: "3px"}}>
                            ● Participated in a three week selective pilot program from a collaboration between Upperline Code
                            and JP. Morgan Chase that aimed to cultivate computer science talent with a focus in fintech
                    </Typography>
                        <Typography variant="subtitle1" style={{ color: "tan", marginBottom: "3px" }}>
                            ● Learned full stack development with HTML, CSS, Javascript, and Python (Flask)
                    </Typography>
                        <Typography variant="subtitle1" style={{ color: "tan", marginBottom: "3px" }}>
                            ● Created a student management system (Wisdom) using the above technologies and deployed it to
                            Heroku. Users can login, create and manage schools data, and managing student data
                    </Typography>
                    </Box>

                </Box>
            </Box>
        </React.Fragment >
    )
}

export default Resume
